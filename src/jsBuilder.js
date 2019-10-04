import { Platform } from "react-native"

export const convertToPostMessageString = obj => {
  return JSON.stringify(obj, (key, val) => {
    if (typeof val === "function") {
      return new Function("return " + val.toString())
    }
    return val
  })
}

export const toString = obj => {
  if (obj === undefined) return JSON.stringify({})

  return JSON.stringify(obj, (key, val) => {
    if (typeof val === "function") {
      return val.toString()
    }
    return val
  })
}

export const getJavascriptSource = props => {
  const { OS } = Platform
  const renderer = "canvas"

  return `
             var chart = echarts.init(document.getElementById('main'), undefined, {renderer: '${renderer}'});
            chart.setOption(parse(decodeURI(\"${encodeURI(
              toString(props.option)
            )}\")));
             setBackgroundColor("${props.backgroundColor}");

             function setBackgroundColor(color) {
                document.getElementById('main').style.backgroundColor = color;
              }
      
              function sendData(data) {
                  window.ReactNativeWebView.postMessage(JSON.stringify({"types":"DATA","payload": data}));
              }
      
              function sendCallbackData(uuid, data) {
                  window.ReactNativeWebView.postMessage(JSON.stringify({"types":"CALLBACK", "uuid": uuid, "payload": data}));
              }
      
              function getOS() {
                  return ${OS};
              }
      
              function parse (data) {
                  return JSON.parse(data, function (key, value) {
      
                      if (value
                          && typeof value === "string"
                          && value.substr(0,8) === "function") {

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
                  var result = JSON.stringify(obj, function (key, val) {
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
      
              function processMessage (e) {
                var req = parse(e.data);
      
                switch(req.types) {
                  case "SET_OPTION":
                    chart.setOption(req.payload.option, req.payload.notMerge,req.payload.lazyUpate);
                    break;
                  case "CLEAR":
                    chart.clear();
                    break;
                  case "SET_BACKGROUND_COLOR":
                    setBackgroundColor(req.color);
                    break;
                  case "GET_OPTION":
                    var option = chart.getOption();
                    var data = {};
    
                    if(req.properties !== undefined) {
                        req.properties.forEach(function (prop) {
                          data[prop] = option[prop];
                        });
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
              }
      
              window.document.addEventListener('message', function(e) {
                processMessage(e);
              });
    
              window.addEventListener('message', function(e) {
                processMessage(e);
              });

              ${props.additionalCode}
        `
}
