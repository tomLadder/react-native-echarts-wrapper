import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { ECharts } from 'react-native-echarts-wrapper';

export default class App extends Component {
  option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      },
    ],
  };

  render() {
    return (
      <View style={styles.chartContainer}>
        <ECharts
          ref={ref => (this.echarts = ref)}
          onLoadEnd={() => {
            this.echarts.setBackgroundColor('rgba(93, 169, 81, 0.1)');
          }}
          legacyMode
          option={this.option}
          backgroundColor="rgba(93, 169, 81, 0.1)"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  chartContainer: {
    flex: 1,
  },
});
