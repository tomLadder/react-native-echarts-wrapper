import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import PropTypes from 'prop-types';
/* eslint-enable */

import * as jsBuilder from './jsBuilder';

/* eslint-disable */
var WebView;
var WebViewExternalPackage;
try {
  WebView = require("react-native").WebView;
} catch (err) {}

try {
  WebViewExternalPackage = require("react-native-webview").WebView;
} catch (err) {}

class ECharts extends Component {
  static propTypes = {
    onData: PropTypes.func,
    baseUrl: PropTypes.string,
    legacyMode: PropTypes.bool,
    canvas: PropTypes.bool,
    onLoadEnd: PropTypes.func,
    backgroundColor: PropTypes.string
  };

  static defaultProps = {
    baseUrl: "",
    onData: () => {},
    legacyMode: false,
    canvas: false,
    onLoadEnd: () => {},
    backgroundColor: "rgba(0, 0, 0, 0)"
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

  onMessage = e => {
    try {
      if (!e) return null;

      const { onData } = this.props;

      const data = JSON.parse(unescape(unescape(e.nativeEvent.data)));

      if (data.types === "DATA") {
        onData(data.payload);
      } else if (data.types === "CALLBACK") {
        /* eslint-disable no-case-declarations */
        const { uuid } = data;
        /* eslint-enable no-case-declarations */
        this.callbacks[uuid](data.payload);
      }
    } catch (error) {
      console.log(error);
    }
  };

  postMessage = data => {
    this.webview.postMessage(jsBuilder.convertToPostMessageString(data));
  };

  ID = () =>
    `_${Math.random()
      .toString(36)
      .substr(2, 9)}`;

  setBackgroundColor = color => {
    const data = {
      types: "SET_BACKGROUND_COLOR",
      color
    };
    this.postMessage(data);
  };

  getOption = (callback, properties = undefined) => {
    const uuid = this.ID();
    this.callbacks[uuid] = callback;
    const data = {
      types: "GET_OPTION",
      uuid,
      properties
    };
    this.postMessage(data);
  };

  setOption = (option, notMerge, lazyUpdate) => {
    const data = {
      types: "SET_OPTION",
      payload: {
        option,
        notMerge: notMerge || false,
        lazyUpdate: lazyUpdate || false
      }
    };
    this.postMessage(data);
  };

  clear = () => {
    const data = {
      types: "CLEAR"
    };
    this.postMessage(data);
  };

  getWebViewRef = ref => {
    this.webview = ref;
  };

  render() {
    let source;
    const { baseUrl, legacyMode } = this.props;

    if (baseUrl) {
      source = {
        html: this.html,
        baseUrl
      };
    } else {
      /* eslint-disable global-require */
      source =
        Platform.OS === "ios"
          ? require("./index.html")
          : { uri: "file:///android_asset/index.html" };
      /* eslint-enable global-require */
    }

    let isExpo = false;

    if (typeof Expo !== "undefined" && Expo.Constants) {
      isExpo = Expo.Constants.appOwnership === "expo";
    }

    return (
      <View style={{ flex: 1 }}>
        {legacyMode ? (
          <WebView
            ref={this.getWebViewRef}
            useWebKit={isExpo}
            originWhitelist={["*"]}
            scrollEnabled={false}
            source={source}
            injectedJavaScript={jsBuilder.getJavascriptSource(this.props)}
            onMessage={this.onMessage}
            allowFileAccess
            allowUniversalAccessFromFileURLs
            mixedContentMode="always"
            onLoadEnd={this.props.onLoadEnd}
          />
        ) : (
          <WebViewExternalPackage
            ref={this.getWebViewRef}
            useWebKit={isExpo}
            originWhitelist={["*"]}
            scrollEnabled={false}
            source={source}
            injectedJavaScript={jsBuilder.getJavascriptSource(this.props)}
            onMessage={this.onMessage}
            allowFileAccess
            allowUniversalAccessFromFileURLs
            mixedContentMode="always"
            onLoadEnd={this.props.onLoadEnd}
          />
        )}
      </View>
    );
  }
}

export { ECharts };
