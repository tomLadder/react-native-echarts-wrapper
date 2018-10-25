import React, { Component } from "react";
import { View, WebView, Platform, Text } from "react-native";
import PropTypes from "prop-types";
import * as jsBuilder from "./jsBuilder";

class ECharts extends Component {
  /* Promises */

  constructor(props) {
    super(props);
    this.state = {};

    this.onGetHeight = null;
  }

  onMessage = e => {
    if (!e) return null;

    const data = JSON.parse(e.nativeEvent.data);
    switch (data.types) {
      case "DATA":
        this.props.onData(data.payload);
        break;
      default:
        break;
    }
  };

  postMessage = data => {
    this.webview.postMessage(JSON.stringify(data));
  };

  /* echartsInstance */
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
    const source =
      Platform.OS == "ios"
        ? require("./index.html")
        : { uri: "file:///android_asset/echarts/index.html" };

    return (
      <View style={{ flex: 1 }}>
        <WebView
          ref={this.getWebViewRef}
          originWhitelist={["*"]}
          scrollEnabled={false}
          source={source}
          injectedJavaScript={jsBuilder.getJavascriptSource(this.props)}
          onMessage={this.onMessage}
        />
      </View>
    );
  }
}

ECharts.propTypes = {
  option: PropTypes.object,
  clear: PropTypes.func,
  setOption: PropTypes.func
};

export { ECharts };
