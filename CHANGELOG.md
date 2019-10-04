## [2.0.0] - Thursday, 03.October 2019

### Breaking Changes

- removed property canvas (canvas renderer default)
- removed legacyMode (<a href="https://github.com/react-native-community/react-native-webview">react-native-webview</a> required)
- removed baseUrl

### Added

- customTemplatePath prop allows to set the path to a custom html-file (template: node_modules/react-native-echarts-wrapper/dist/index.html)

### Fixed

- Tried to register two views with the same name RNCWebView? (<a href="https://github.com/tomLadder/react-native-echarts-wrapper/issues/35" target="_blank">#35</a>)
- Got rejected from Apple review (<a href="https://github.com/tomLadder/react-native-echarts-wrapper/issues/31" target="_blank">#31</a>)
- usage on expo as there is no android_asset folder (<a href="https://github.com/tomLadder/react-native-echarts-wrapper/issues/19" target="_blank">#19</a>)
- cannot use '\n' in custom format text (<a href="https://github.com/tomLadder/react-native-echarts-wrapper/issues/14" target="_blank">#14</a>)

## [1.4.7] - Thursday, 12.September 2019

### Fixed

- Variables and functions from injectedJavaScript not available on Android (<a href="https://github.com/react-native-community/react-native-webview/issues/554" target="_blank">see react-native issue</a>)

## [1.4.5] - Saturday, 17.August 2019

### Added

- Loading state/Background Color (<a href="https://github.com/tomLadder/react-native-echarts-wrapper/issues/17" target="_blank">#17</a>)

## [1.4.4] - Thursday, 08.August 2019

### Fixed

- postMessage double-encoded iOS RN 0.59.x (<a href="https://github.com/facebook/react-native/issues/25266" target="_blank">see react-native issue</a>)

## [1.4.3] - Tuesday, 06.August 2019

### Fixed

- Broken on React Native >= 0.60.0 (Invariant Violation: Element type is invalid) (<a href="https://github.com/tomLadder/react-native-echarts-wrapper/issues/27" target="_blank">#27</a>)

## [1.4.2] - Wednesday, 31.July 2019

### Fixed

- fix arrow function not working on old version Android webview (<a href="https://github.com/tomLadder/react-native-echarts-wrapper/pull/25" target="_blank">#25</a>)

## [1.4.1] - Tuesday, 25.June 2019

### Fixed

- Dynamic loading issue on iOS (<a href="https://github.com/tomLadder/react-native-echarts-wrapper/issues/16" target="_blank">#16</a>)

## [1.4.0] - Monday, 20.May 2019

### Fixed

- Doesn't work on iOS in Expo (<a href="https://github.com/tomLadder/react-native-echarts-wrapper/issues/13" target="_blank">#13</a>)

### Added

- canvas & legacyMode

## [1.3.1] - Wednesday, 24.Apr 2019

### Fixed

- Doesn't work on iOS in Expo (<a href="https://github.com/tomLadder/react-native-echarts-wrapper/issues/13" target="_blank">#13</a>)

## [1.3.0] - Thursday, 18.Apr 2019

### Added

- tests, coverage, build report

### Fixed

- Blank page on Android (<a href="https://github.com/tomLadder/react-native-echarts-wrapper/issues/10" target="_blank">#10</a>)

## [1.2.2] - Monday, 18.Feb 2019

### Fixed

- crash when not passing an option

## [1.2.1] - Wednesday, 16.Jan 2019

### Added

- getOption (<a href="https://github.com/tomLadder/react-native-echarts-wrapper/issues/4" target="_blank">#4</a>)

## [1.1.1] - Tuesday, 27.Nov 2018

### Fixed

- Documentation missing (<a href="https://github.com/tomLadder/react-native-echarts-wrapper/issues/3" target="_blank">#3</a>)

## [1.1.0] - Saturday, 17.Nov 2018

### Added

- baseUrl prop allows to access local content within the Webview on iOS and Android
- additionalCode prop allows to create more complex chart configurations (e.G. `chart.on('click'`)

## [1.0.4] - Monday, 5.Nov 2018

### Fixed

- Functions in options do not work when setting via 'setOptions'
