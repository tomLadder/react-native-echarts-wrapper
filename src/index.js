import React, { Component } from 'react';
import { View, WebView, Platform } from 'react-native';
import PropTypes from 'prop-types';

import * as jsBuilder from './jsBuilder';

class ECharts extends Component {
    static propTypes = {
      onData: PropTypes.func,
      baseUrl: PropTypes.string,
    };

    static defaultProps = {
      baseUrl: '',
      onData: () => {},
    };

    constructor(props) {
      super(props);
      this.onGetHeight = null;
      this.callbacks = {};
      const { baseUrl } = props;

      this.html = `
      <!DOCTYPE html>
      <html lang="de">

      <head>
          <meta http-equiv="content-type" content="text/html; charset=utf-8">
          <meta name="viewport" content="initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no">
          <style type="text/css">
            html,body {
              height: 100%;
              width: 100%;
              margin: 0;
              padding: 0;
              background-color:rgba(0, 0, 0, 0);
            }
            #main {
              height: 100%;
              background-color:rgba(0, 0, 0, 0);
            }
            </style>
            <script src="${baseUrl}/echarts.min.js"></script>
          </head>

      <body>
          <div id="main"></div>
      </body>

      </html>`;
    }

    onMessage = (e) => {
      if (!e) return null;

      const { onData } = this.props;

      const data = JSON.parse(e.nativeEvent.data);

      if (data.types === 'DATA') {
        onData(data.payload);
      } else if (data.types === 'CALLBACK') {
        /* eslint-disable no-case-declarations */
        const { uuid } = data;
        /* eslint-enable no-case-declarations */
        this.callbacks[uuid](data.payload);
      }
    };

    postMessage = (data) => {
      this.webview.postMessage(jsBuilder.convertToPostMessageString(data));
    };

    ID = () => `_${Math.random()
      .toString(36)
      .substr(2, 9)}`;

    getOption = (callback, properties = undefined) => {
      const uuid = this.ID();
      this.callbacks[uuid] = callback;
      const data = {
        types: 'GET_OPTION',
        uuid,
        properties,
      };
      this.postMessage(data);
    };

    setOption = (option, notMerge, lazyUpdate) => {
      const data = {
        types: 'SET_OPTION',
        payload: {
          option,
          notMerge: notMerge || false,
          lazyUpdate: lazyUpdate || false,
        },
      };
      this.postMessage(data);
    };

    clear = () => {
      const data = {
        types: 'CLEAR',
      };
      this.postMessage(data);
    };

    getWebViewRef = (ref) => {
      this.webview = ref;
    };

    render() {
      let source;
      const { baseUrl } = this.props;

      if (baseUrl) {
        source = {
          html: this.html,
          baseUrl,
        };
      } else {
        /* eslint-disable global-require */
        source = Platform.OS === 'ios'
          ? require('./index.html')
          : { uri: 'file:///android_asset/index.html' };
        /* eslint-enable global-require */
      }

      return (
        <View style={{ flex: 1 }}>
          <WebView
            ref={this.getWebViewRef}
            originWhitelist={['*']}
            scrollEnabled={false}
            source={source}
            injectedJavaScript={jsBuilder.getJavascriptSource(this.props)}
            onMessage={this.onMessage}
            allowFileAccess
            allowUniversalAccessFromFileURLs
            mixedContentMode="always"
          />
        </View>
      );
    }
}

export { ECharts };
