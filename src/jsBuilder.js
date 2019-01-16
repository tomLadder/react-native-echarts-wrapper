import { Platform } from "react-native";

export const convertToPostMessageString = obj => {
  const result = JSON.stringify(obj, (key, val) => {
    if (typeof val === "function") {
      return val.toString();
    }
    return val;
  });

  return result;
};

const toString = obj => {
  let result = JSON.stringify(obj, (key, val) => {
    if (typeof val === "function") {
      return `~ha~${val}~ha~`;
    }
    return val;
  });

  do {
    result = result
      .replace('"~ha~', "")
      .replace('~ha~"', "")
      .replace(/\\n/g, "")
      .replace(/\\\"/g, '"'); // 最后一个replace将release模式中莫名生成的\"转换成"
  } while (result.indexOf("~ha~") >= 0);
  return result;
};

export const getJavascriptSource = props => {
  const { OS } = Platform;
  return `
        var chart = echarts.init(document.getElementById('main'));
        chart.setOption(${toString(props.option)});

        function sendData(data) {
            window.postMessage(JSON.stringify({"types":"DATA","payload": data}));
        }

        function sendCallbackData(uuid, data) {
            window.postMessage(JSON.stringify({"types":"CALLBACK", "uuid": uuid, "payload": data}));
        }

        function getOS() {
            return ${OS};
        }

        function parse (data) {
            return JSON.parse(data, function (key, value) {

                if (value
                    && typeof value === "string"
                    && value.substr(0,8) == "function") {
                    var startBody = value.indexOf('{') + 1;
                    var endBody = value.lastIndexOf('}');
                    var startArgs = value.indexOf('(') + 1;
                    var endArgs = value.indexOf(')');

                    return new Function(value.substring(startArgs, endArgs)
                                      , value.substring(startBody, endBody));
                }
                return value;
            });
        }

        function toString (obj) {
            var result = JSON.stringify(obj, (key, val) => {
              if (typeof val === 'function') {
                return val.toString();
              }
              return val;
            });

            return result;
        };

        window.onresize = function() {
            chart.resize();
        };

        window.document.addEventListener('message', function(e) {
            var req = parse(e.data);

            switch(req.types) {
              case "SET_OPTION":
                chart.setOption(req.payload.option, req.payload.notMerge,req.payload.lazyUpate);
                break;
              case "CLEAR":
                chart.clear();
                break;
              case "GET_OPTION":
                var option = chart.getOption();
                var data = {};

                if(req.properties !== undefined) {
                    req.properties.forEach((prop) => data[prop] = option[prop]);
                } else {
                    var data = {
                        option: option
                     };
                }

                sendCallbackData(req.uuid, data);
                break;
              default:
                break;
            }
        });

        ${props.additionalCode}
    `;
};
