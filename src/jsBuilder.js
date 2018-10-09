import { Platform } from 'react-native';

const toString = (obj) => {
    let result = JSON.stringify(obj, function (key, val) {
        if (typeof val === 'function') {
            return `~ha~${val}~ha~`;
        }
        return val;
    });

    do {
        result = result.replace('\"~ha~', '').replace('~ha~\"', '').replace(/\\n/g, '').replace(/\\\"/g, "\"");
    } while (result.indexOf('~ha~') >= 0);
    return result;
}

export const getJavascriptSource = (props) => {
    const { OS } = Platform;
    return `
        var chart = echarts.init(document.getElementById('main'));
        chart.setOption(${toString(props.option)});

        function sendData(data) {
            window.postMessage(JSON.stringify({"types":"DATA","payload": data}));
        }

        function getOS() {
            return ${OS};
        }

        window.onresize = function() {
            chart.resize();
        };

        window.document.addEventListener('message', function(e) {
            var req = JSON.parse(e.data);
            switch(req.types) {
              case "SET_OPTION":
                chart.setOption(req.payload.option,req.payload.notMerge,req.payload.lazyUpate);
                break;
              case "CLEAR":
                chart.clear();
                break;
              default:
                break;
            }
        });
    `;
}