import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, Button } from 'react-native';
import { ECharts } from 'react-native-echarts-wrapper';

export default class App extends Component {
  onRef = (ref) => {
    if (ref) {
      this.chart = ref;
    }
  };

  onData = (param) => {};

  initChart = () => {
    function randomData() {
      now = new Date(+now + oneDay);
      value = value + Math.random() * 21 - 10;
      return {
        name: now.toString(),
        value: [
          [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
          Math.round(value),
        ],
      };
    }

    const data = [];
    var now = +new Date(1997, 9, 3);
    var oneDay = 24 * 3600 * 1000;
    var value = Math.random() * 1000;
    for (let i = 0; i < 1000; i++) {
      data.push(randomData());
    }

    option = {
      title: {
        text: 'Dynamic Chart',
      },
      tooltip: {
        trigger: 'axis',
        formatter(params) {
          params = params[0];
          const date = new Date(params.name);
          return `${date.getDate()}/${date.getMonth()
            + 1}/${date.getFullYear()} : ${params.value[1]}`;
        },
        axisPointer: {
          animation: false,
        },
      },
      xAxis: {
        type: 'time',
        splitLine: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          data,
        },
      ],
    };

    this.chart.setOption(option);

    // no query parameter: whole option object
    this.chart.getOption((option) => {
      console.log(option);
    });

    // with query parameter
    this.chart.getOption(
      (option) => {
        console.log(option);
      },
      ['dataZoom', 'series'],
    );

    const instance = this.chart;

    setInterval(() => {
      for (let i = 0; i < 5; i++) {
        data.shift();
        data.push(randomData());
      }

      instance.setOption({
        series: [
          {
            data,
          },
        ],
      });
    }, 100);
  };

  render() {
    return (
      <SafeAreaView style={styles.chartContainer}>
        <Button title="Start" onPress={this.initChart} />

        <ECharts
          onLoadEnd={() => alert('finished loading')}
          legacyMode
          option={{}}
          ref={this.onRef}
          additionalCode={this.additionalCode}
          onData={this.onData}
          canvas
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  chartContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
