<h1 align="center">
  <br>
  <a href="https://github.com/tomLadder/react-native-echarts-wrapper"><img src="https://raw.githubusercontent.com/tomLadder/react-native-echarts-wrapper/develope/images/echarts.png" alt="ECharts" width="200"></a>
  <br>
  react-native-echarts-wrapper
  <br>
</h1>

<h4 align="center">ECharts wrapper build for <a href="https://facebook.github.io/react-native/" target="_blank">React Native</a>.</h4>

<p align="center">
  <a>
    <img src="https://forthebadge.com/images/badges/built-with-love.svg">
  </a>
  <a>
    <img src="https://forthebadge.com/images/badges/uses-html.svg">
  </a>
  <a>
    <img src="https://forthebadge.com/images/badges/fuck-it-ship-it.svg">
  </a>
</p>

<p align="center">
  <a href="#screenshots">Screenshots</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#authors">Authors</a>
</p>

![screenshot](https://raw.githubusercontent.com/tomLadder/react-native-echarts-wrapper/develope/images/dynamic.png)

# Screenshots

<p align="center">
<img src="https://raw.githubusercontent.com/tomLadder/react-native-echarts-wrapper/develope/images/custom.png" width="200">
<img src="https://raw.githubusercontent.com/tomLadder/react-native-echarts-wrapper/develope/images/custom_rn_handler.png" width="200">
<img src="https://raw.githubusercontent.com/tomLadder/react-native-echarts-wrapper/develope/images/simple.png" width="200">
</p>

# How To Use
```bash
$ npm install react-native-echarts-wrapper --save
```

### Example
```js
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { ECharts } from 'react-native-echarts-wrapper';

export default class App extends Component {
    option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        }]
    };

    render() {
        return (
            <View style={styles.chartContainer}>
                <ECharts option={this.option}></ECharts>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    chartContainer: {
        flex: 1,
    },
});
```

## [1.1.0] - Saturday, 17.Nov 2018
### Added
- baseUrl prop allows to access local content within the Webview on iOS and Android
- additionalCode prop allows to create more complex chart configurations (e.G. ```chart.on('click'```)

## [1.0.4] - Monday, 5.Nov 2018
### Fixed
- Functions in options do not work when setting via 'setOptions'

# Authors

[<img alt="Thomas Leiter" src="https://avatars3.githubusercontent.com/u/20393156?s=400&u=ae0a43de5d81d58a698abffe4e2ede024f2b6700&v=4" width="117">](https://github.com/tomLadder) |
:---:
|[Thomas Leiter](https://github.com/tomLadder)|


See also the list of [contributors](https://github.com/tomLadder/react-native-echarts-wrapper/settings/collaboration) who participated in this project.
