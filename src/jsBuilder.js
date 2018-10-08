import { Platform } from 'react-native';

const toString = (obj) => {
    let result = JSON.stringify(obj, (key, val) => {
        if (typeof val === 'function') {
            return `~ha~${val}~ha~`;
        }
        return val;
    });
    do {
        result = result.replace('\"~ha~', '').replace('~h  a~\"', '').replace(/\\n/g, '').replace(/\\\"/g, '"');// 最后一个replace将release模式中莫名生成的\"转换成"
    } while (result.indexOf('~ha~') >= 0);
    return result;
};

export const getJavascriptSource = (props) => {
    let { option } = props;
    const { OS } = Platform;
    return `
        var chart = echarts.init(document.getElementById('main'));
        chart.setOption(${toString(option)});

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