import React, { Component } from 'react';
import { View, WebView, Platform, Text } from 'react-native';
import PropTypes from 'prop-types';
import * as jsBuilder from './jsBuilder';

class ECharts extends Component {
  /* Promises */

  constructor(props) {
    super(props);
    this.state = {};
    this.onGetHeight = null;

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
          <script src="${this.props.baseUrl}/echarts.min.js"></script>
        </head>

    <body>
        <div id="main"></div>
    </body>

    </html>`;
  }

  onMessage = (e) => {
    if (!e) return null;

    const data = JSON.parse(e.nativeEvent.data);
    switch (data.types) {
      case 'DATA':
        this.props.onData(data.payload);
        break;
      default:
        break;
    }
  };
  postMessage = (data) => {
    this.webview.postMessage(jsBuilder.convertToPostMessageString(data));
  };

  /* echartsInstance */
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
    if (this.props.baseUrl) {
      source = {
        html: this.html,
        baseUrl: this.props.baseUrl
      }
    } else {
      source =
        Platform.OS == 'ios'
          ? require('./index.html')
          : { uri: 'file:///android_asset/index.html' };
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

ECharts.propTypes = {
  option: PropTypes.object,
  clear: PropTypes.func,
  setOption: PropTypes.func,
  baseUrl: PropTypes.string,
  additionalCode: PropTypes.string
};

export { ECharts };
