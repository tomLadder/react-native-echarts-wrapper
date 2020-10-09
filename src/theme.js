export function getTheme() {
    return '(function (root, factory) {\n' +
        '    if (typeof define === \'function\' && define.amd) {\n' +
        '        // AMD. Register as an anonymous module.\n' +
        '        define([\'exports\', \'echarts\'], factory);\n' +
        '    } else if (typeof exports === \'object\' && typeof exports.nodeName !== \'string\') {\n' +
        '        // CommonJS\n' +
        '        factory(exports, require(\'echarts\'));\n' +
        '    } else {\n' +
        '        // Browser globals\n' +
        '        factory({}, root.echarts);\n' +
        '    }\n' +
        '}(this, function (exports, echarts) {\n' +
        '    var log = function (msg) {\n' +
        '        if (typeof console !== \'undefined\') {\n' +
        '            console && console.error && console.error(msg);\n' +
        '        }\n' +
        '    };\n' +
        '    if (!echarts) {\n' +
        '        log(\'ECharts is not Loaded\');\n' +
        '        return;\n' +
        '    }\n' +
        '    echarts.registerTheme(\'walden\', {\n' +
        '        "color": [\n' +
        '            "#3296f7",\n' +
        '            "#6be6c1",\n' +
        '            "#59d3e9",\n' +
        '            "#ac81f8",\n' +
        '            "#ffe748",\n' +
        '            "#ef6c63"\n' +
        '        ],\n' +
        '        "backgroundColor": "rgba(252,252,252,0)",\n' +
        '        "textStyle": {},\n' +
        '        "title": {\n' +
        '            "textStyle": {\n' +
        '                "color": "#666666"\n' +
        '            },\n' +
        '            "subtextStyle": {\n' +
        '                "color": "#999999"\n' +
        '            }\n' +
        '        },\n' +
        '        "line": {\n' +
        '            "itemStyle": {\n' +
        '                "normal": {\n' +
        '                    "borderWidth": "2"\n' +
        '                }\n' +
        '            },\n' +
        '            "lineStyle": {\n' +
        '                "normal": {\n' +
        '                    "width": "3"\n' +
        '                }\n' +
        '            },\n' +
        '            "symbolSize": "8",\n' +
        '            "symbol": "emptyCircle",\n' +
        '            "smooth": false\n' +
        '        },\n' +
        '        "radar": {\n' +
        '            "itemStyle": {\n' +
        '                "normal": {\n' +
        '                    "borderWidth": "2"\n' +
        '                }\n' +
        '            },\n' +
        '            "lineStyle": {\n' +
        '                "normal": {\n' +
        '                    "width": "3"\n' +
        '                }\n' +
        '            },\n' +
        '            "symbolSize": "8",\n' +
        '            "symbol": "emptyCircle",\n' +
        '            "smooth": false\n' +
        '        },\n' +
        '        "bar": {\n' +
        '            "itemStyle": {\n' +
        '                "normal": {\n' +
        '                    "barBorderWidth": 0,\n' +
        '                    "barBorderColor": "#ccc"\n' +
        '                },\n' +
        '                "emphasis": {\n' +
        '                    "barBorderWidth": 0,\n' +
        '                    "barBorderColor": "#ccc"\n' +
        '                }\n' +
        '            }\n' +
        '        },\n' +
        '        "pie": {\n' +
        '            "itemStyle": {\n' +
        '                "normal": {\n' +
        '                    "borderWidth": 0,\n' +
        '                    "borderColor": "#ccc"\n' +
        '                },\n' +
        '                "emphasis": {\n' +
        '                    "borderWidth": 0,\n' +
        '                    "borderColor": "#ccc"\n' +
        '                }\n' +
        '            }\n' +
        '        },\n' +
        '        "scatter": {\n' +
        '            "itemStyle": {\n' +
        '                "normal": {\n' +
        '                    "borderWidth": 0,\n' +
        '                    "borderColor": "#ccc"\n' +
        '                },\n' +
        '                "emphasis": {\n' +
        '                    "borderWidth": 0,\n' +
        '                    "borderColor": "#ccc"\n' +
        '                }\n' +
        '            }\n' +
        '        },\n' +
        '        "boxplot": {\n' +
        '            "itemStyle": {\n' +
        '                "normal": {\n' +
        '                    "borderWidth": 0,\n' +
        '                    "borderColor": "#ccc"\n' +
        '                },\n' +
        '                "emphasis": {\n' +
        '                    "borderWidth": 0,\n' +
        '                    "borderColor": "#ccc"\n' +
        '                }\n' +
        '            }\n' +
        '        },\n' +
        '        "parallel": {\n' +
        '            "itemStyle": {\n' +
        '                "normal": {\n' +
        '                    "borderWidth": 0,\n' +
        '                    "borderColor": "#ccc"\n' +
        '                },\n' +
        '                "emphasis": {\n' +
        '                    "borderWidth": 0,\n' +
        '                    "borderColor": "#ccc"\n' +
        '                }\n' +
        '            }\n' +
        '        },\n' +
        '        "sankey": {\n' +
        '            "itemStyle": {\n' +
        '                "normal": {\n' +
        '                    "borderWidth": 0,\n' +
        '                    "borderColor": "#ccc"\n' +
        '                },\n' +
        '                "emphasis": {\n' +
        '                    "borderWidth": 0,\n' +
        '                    "borderColor": "#ccc"\n' +
        '                }\n' +
        '            }\n' +
        '        },\n' +
        '        "funnel": {\n' +
        '            "itemStyle": {\n' +
        '                "normal": {\n' +
        '                    "borderWidth": 0,\n' +
        '                    "borderColor": "#ccc"\n' +
        '                },\n' +
        '                "emphasis": {\n' +
        '                    "borderWidth": 0,\n' +
        '                    "borderColor": "#ccc"\n' +
        '                }\n' +
        '            }\n' +
        '        },\n' +
        '        "gauge": {\n' +
        '            "itemStyle": {\n' +
        '                "normal": {\n' +
        '                    "borderWidth": 0,\n' +
        '                    "borderColor": "#ccc"\n' +
        '                },\n' +
        '                "emphasis": {\n' +
        '                    "borderWidth": 0,\n' +
        '                    "borderColor": "#ccc"\n' +
        '                }\n' +
        '            }\n' +
        '        },\n' +
        '        "candlestick": {\n' +
        '            "itemStyle": {\n' +
        '                "normal": {\n' +
        '                    "color": "#e6a0d2",\n' +
        '                    "color0": "transparent",\n' +
        '                    "borderColor": "#e6a0d2",\n' +
        '                    "borderColor0": "#3fb1e3",\n' +
        '                    "borderWidth": "2"\n' +
        '                }\n' +
        '            }\n' +
        '        },\n' +
        '        "graph": {\n' +
        '            "itemStyle": {\n' +
        '                "normal": {\n' +
        '                    "borderWidth": 0,\n' +
        '                    "borderColor": "#ccc"\n' +
        '                }\n' +
        '            },\n' +
        '            "lineStyle": {\n' +
        '                "normal": {\n' +
        '                    "width": "1",\n' +
        '                    "color": "#cccccc"\n' +
        '                }\n' +
        '            },\n' +
        '            "symbolSize": "8",\n' +
        '            "symbol": "emptyCircle",\n' +
        '            "smooth": false,\n' +
        '            "color": [\n' +
        '                "#3296f7",\n' +
        '                "#6be6c1",\n' +
        '                "#59d3e9",\n' +
        '                "#ac81f8",\n' +
        '                "#ffe748",\n' +
        '                "#ef6c63"\n' +
        '            ],\n' +
        '            "label": {\n' +
        '                "normal": {\n' +
        '                    "textStyle": {\n' +
        '                        "color": "#ffffff"\n' +
        '                    }\n' +
        '                }\n' +
        '            }\n' +
        '        },\n' +
        '        "map": {\n' +
        '            "itemStyle": {\n' +
        '                "normal": {\n' +
        '                    "areaColor": "#eeeeee",\n' +
        '                    "borderColor": "#aaaaaa",\n' +
        '                    "borderWidth": 0.5\n' +
        '                },\n' +
        '                "emphasis": {\n' +
        '                    "areaColor": "rgba(63,177,227,0.25)",\n' +
        '                    "borderColor": "#3fb1e3",\n' +
        '                    "borderWidth": 1\n' +
        '                }\n' +
        '            },\n' +
        '            "label": {\n' +
        '                "normal": {\n' +
        '                    "textStyle": {\n' +
        '                        "color": "#ffffff"\n' +
        '                    }\n' +
        '                },\n' +
        '                "emphasis": {\n' +
        '                    "textStyle": {\n' +
        '                        "color": "rgb(63,177,227)"\n' +
        '                    }\n' +
        '                }\n' +
        '            }\n' +
        '        },\n' +
        '        "geo": {\n' +
        '            "itemStyle": {\n' +
        '                "normal": {\n' +
        '                    "areaColor": "#eeeeee",\n' +
        '                    "borderColor": "#aaaaaa",\n' +
        '                    "borderWidth": 0.5\n' +
        '                },\n' +
        '                "emphasis": {\n' +
        '                    "areaColor": "rgba(63,177,227,0.25)",\n' +
        '                    "borderColor": "#3fb1e3",\n' +
        '                    "borderWidth": 1\n' +
        '                }\n' +
        '            },\n' +
        '            "label": {\n' +
        '                "normal": {\n' +
        '                    "textStyle": {\n' +
        '                        "color": "#ffffff"\n' +
        '                    }\n' +
        '                },\n' +
        '                "emphasis": {\n' +
        '                    "textStyle": {\n' +
        '                        "color": "rgb(63,177,227)"\n' +
        '                    }\n' +
        '                }\n' +
        '            }\n' +
        '        },\n' +
        '        "categoryAxis": {\n' +
        '            "axisLine": {\n' +
        '                "show": true,\n' +
        '                "lineStyle": {\n' +
        '                    "color": "#d9d9d9"\n' +
        '                }\n' +
        '            },\n' +
        '            "axisTick": {\n' +
        '                "show": false,\n' +
        '                "lineStyle": {\n' +
        '                    "color": "#333"\n' +
        '                }\n' +
        '            },\n' +
        '            "axisLabel": {\n' +
        '                "show": true,\n' +
        '                "textStyle": {\n' +
        '                    "color": "#999999"\n' +
        '                }\n' +
        '            },\n' +
        '            "splitLine": {\n' +
        '                "show": true,\n' +
        '                "lineStyle": {\n' +
        '                    "color": [\n' +
        '                        "#f0f0f0"\n' +
        '                    ]\n' +
        '                }\n' +
        '            },\n' +
        '            "splitArea": {\n' +
        '                "show": false,\n' +
        '                "areaStyle": {\n' +
        '                    "color": [\n' +
        '                        "rgba(250,250,250,0.05)",\n' +
        '                        "rgba(200,200,200,0.02)"\n' +
        '                    ]\n' +
        '                }\n' +
        '            }\n' +
        '        },\n' +
        '        "valueAxis": {\n' +
        '            "axisLine": {\n' +
        '                "show": true,\n' +
        '                "lineStyle": {\n' +
        '                    "color": "#d9d9d9"\n' +
        '                }\n' +
        '            },\n' +
        '            "axisTick": {\n' +
        '                "show": false,\n' +
        '                "lineStyle": {\n' +
        '                    "color": "#333"\n' +
        '                }\n' +
        '            },\n' +
        '            "axisLabel": {\n' +
        '                "show": true,\n' +
        '                "textStyle": {\n' +
        '                    "color": "#999999"\n' +
        '                }\n' +
        '            },\n' +
        '            "splitLine": {\n' +
        '                "show": true,\n' +
        '                "lineStyle": {\n' +
        '                    "color": [\n' +
        '                        "#f0f0f0"\n' +
        '                    ]\n' +
        '                }\n' +
        '            },\n' +
        '            "splitArea": {\n' +
        '                "show": false,\n' +
        '                "areaStyle": {\n' +
        '                    "color": [\n' +
        '                        "rgba(250,250,250,0.05)",\n' +
        '                        "rgba(200,200,200,0.02)"\n' +
        '                    ]\n' +
        '                }\n' +
        '            }\n' +
        '        },\n' +
        '        "logAxis": {\n' +
        '            "axisLine": {\n' +
        '                "show": true,\n' +
        '                "lineStyle": {\n' +
        '                    "color": "#d9d9d9"\n' +
        '                }\n' +
        '            },\n' +
        '            "axisTick": {\n' +
        '                "show": false,\n' +
        '                "lineStyle": {\n' +
        '                    "color": "#333"\n' +
        '                }\n' +
        '            },\n' +
        '            "axisLabel": {\n' +
        '                "show": true,\n' +
        '                "textStyle": {\n' +
        '                    "color": "#999999"\n' +
        '                }\n' +
        '            },\n' +
        '            "splitLine": {\n' +
        '                "show": true,\n' +
        '                "lineStyle": {\n' +
        '                    "color": [\n' +
        '                        "#f0f0f0"\n' +
        '                    ]\n' +
        '                }\n' +
        '            },\n' +
        '            "splitArea": {\n' +
        '                "show": false,\n' +
        '                "areaStyle": {\n' +
        '                    "color": [\n' +
        '                        "rgba(250,250,250,0.05)",\n' +
        '                        "rgba(200,200,200,0.02)"\n' +
        '                    ]\n' +
        '                }\n' +
        '            }\n' +
        '        },\n' +
        '        "timeAxis": {\n' +
        '            "axisLine": {\n' +
        '                "show": true,\n' +
        '                "lineStyle": {\n' +
        '                    "color": "#2118d9"\n' +
        '                }\n' +
        '            },\n' +
        '            "axisTick": {\n' +
        '                "show": false,\n' +
        '                "lineStyle": {\n' +
        '                    "color": "#333"\n' +
        '                }\n' +
        '            },\n' +
        '            "axisLabel": {\n' +
        '                "show": true,\n' +
        '                "textStyle": {\n' +
        '                    "color": "#999999"\n' +
        '                }\n' +
        '            },\n' +
        '            "splitLine": {\n' +
        '                "show": true,\n' +
        '                "lineStyle": {\n' +
        '                    "color": [\n' +
        '                        "#f02916"\n' +
        '                    ]\n' +
        '                }\n' +
        '            },\n' +
        '            "splitArea": {\n' +
        '                "show": false,\n' +
        '                "areaStyle": {\n' +
        '                    "color": [\n' +
        '                        "rgba(250,250,250,0.05)",\n' +
        '                        "rgba(200,200,200,0.02)"\n' +
        '                    ]\n' +
        '                }\n' +
        '            }\n' +
        '        },\n' +
        '        "toolbox": {\n' +
        '            "iconStyle": {\n' +
        '                "normal": {\n' +
        '                    "borderColor": "#999999"\n' +
        '                },\n' +
        '                "emphasis": {\n' +
        '                    "borderColor": "#666666"\n' +
        '                }\n' +
        '            }\n' +
        '        },\n' +
        '        "legend": {\n' +
        '            "textStyle": {\n' +
        '                "color": "#999999"\n' +
        '            }\n' +
        '        },\n' +
        '        "tooltip": {\n' +
        '            "axisPointer": {\n' +
        '                "lineStyle": {\n' +
        '                    "color": "#cccccc",\n' +
        '                    "width": 1\n' +
        '                },\n' +
        '                "crossStyle": {\n' +
        '                    "color": "#cccccc",\n' +
        '                    "width": 1\n' +
        '                }\n' +
        '            }\n' +
        '        },\n' +
        '        "timeline": {\n' +
        '            "lineStyle": {\n' +
        '                "color": "#626c91",\n' +
        '                "width": 1\n' +
        '            },\n' +
        '            "itemStyle": {\n' +
        '                "normal": {\n' +
        '                    "color": "#626c91",\n' +
        '                    "borderWidth": 1\n' +
        '                },\n' +
        '                "emphasis": {\n' +
        '                    "color": "#626c91"\n' +
        '                }\n' +
        '            },\n' +
        '            "controlStyle": {\n' +
        '                "normal": {\n' +
        '                    "color": "#626c91",\n' +
        '                    "borderColor": "#626c91",\n' +
        '                    "borderWidth": 0.5\n' +
        '                },\n' +
        '                "emphasis": {\n' +
        '                    "color": "#626c91",\n' +
        '                    "borderColor": "#626c91",\n' +
        '                    "borderWidth": 0.5\n' +
        '                }\n' +
        '            },\n' +
        '            "checkpointStyle": {\n' +
        '                "color": "#3fb1e3",\n' +
        '                "borderColor": "rgba(63,177,227,0.15)"\n' +
        '            },\n' +
        '            "label": {\n' +
        '                "normal": {\n' +
        '                    "textStyle": {\n' +
        '                        "color": "#626c91"\n' +
        '                    }\n' +
        '                },\n' +
        '                "emphasis": {\n' +
        '                    "textStyle": {\n' +
        '                        "color": "#626c91"\n' +
        '                    }\n' +
        '                }\n' +
        '            }\n' +
        '        },\n' +
        '        "visualMap": {\n' +
        '            "color": [\n' +
        '                "#2a99c9",\n' +
        '                "#afe8ff"\n' +
        '            ]\n' +
        '        },\n' +
        '        "dataZoom": {\n' +
        '            "backgroundColor": "rgba(255,255,255,0)",\n' +
        '            "dataBackgroundColor": "rgba(222,222,222,1)",\n' +
        '            "fillerColor": "rgba(114,230,212,0.25)",\n' +
        '            "handleColor": "#cccccc",\n' +
        '            "handleSize": "100%",\n' +
        '            "textStyle": {\n' +
        '                "color": "#999999"\n' +
        '            }\n' +
        '        },\n' +
        '        "markPoint": {\n' +
        '            "label": {\n' +
        '                "normal": {\n' +
        '                    "textStyle": {\n' +
        '                        "color": "#ffffff"\n' +
        '                    }\n' +
        '                },\n' +
        '                "emphasis": {\n' +
        '                    "textStyle": {\n' +
        '                        "color": "#ffffff"\n' +
        '                    }\n' +
        '                }\n' +
        '            }\n' +
        '        }\n' +
        '    });\n' +
        '}));\n'
}
