import React from 'react';
import { render } from 'react-native-testing-library';

import { ECharts } from '../index';

describe('index', () => {
  it('rendering works', () => {
    const jsx = <ECharts baseUrl="something" />;
    render(jsx);
  });

  it('clear works', () => {
    const jsx = <ECharts baseUrl="something" />;
    const renderer = render(jsx);

    const echarts = renderer.getByType(ECharts);
    echarts.instance.webview.postMessage = jest.fn();
    echarts.instance.clear();

    expect(echarts.instance.webview.postMessage).toBeCalledWith('{"types":"CLEAR"}');
  });

  it('getOption works', () => {
    const jsx = <ECharts baseUrl="something" />;
    const renderer = render(jsx);

    const echarts = renderer.getByType(ECharts);
    echarts.instance.postMessage = jest.fn();
    echarts.instance.getOption(() => {});

    expect(echarts.instance.postMessage).toBeCalledWith(expect.objectContaining({
      properties: undefined,
      types: 'GET_OPTION',
      uuid: expect.any(String),
    }));
  });

  it('setOption works', () => {
    const jsx = <ECharts baseUrl="something" />;
    const renderer = render(jsx);

    const echarts = renderer.getByType(ECharts);
    echarts.instance.postMessage = jest.fn();
    echarts.instance.setOption({ test: '12345' });

    expect(echarts.instance.postMessage).toBeCalledWith(expect.objectContaining({
      payload: expect.objectContaining({
        lazyUpdate: false,
        notMerge: false,
        option: {
          test: '12345',
        },
      }),
      types: 'SET_OPTION',
    }));
  });

  it('onMessage (CALLBACK) works', () => {
    const jsx = <ECharts baseUrl="something" />;
    const renderer = render(jsx);

    const echarts = renderer.getByType(ECharts);
    echarts.instance.callbacks['1234'] = jest.fn();

    const obj = {
      types: 'CALLBACK',
      uuid: '1234',
      payload: {
        somevalue: 'helloworld',
      },
    };

    echarts.instance.onMessage({
      nativeEvent: {
        data: JSON.stringify(obj),
      },
    });

    expect(echarts.instance.callbacks['1234']).toBeCalledWith({ somevalue: 'helloworld' });
  });

  it('onMessage (DATA) works', () => {
    const onData = jest.fn();
    const jsx = <ECharts baseUrl="something" onData={onData} />;
    const renderer = render(jsx);

    const echarts = renderer.getByType(ECharts);

    const obj = {
      types: 'DATA',
      payload: {
        somevalue: 'helloworld',
      },
    };

    echarts.instance.onMessage({
      nativeEvent: {
        data: JSON.stringify(obj),
      },
    });

    expect(onData).toBeCalledWith(obj.payload);
  });
});
