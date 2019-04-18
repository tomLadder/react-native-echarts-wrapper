import {
  toString,
  convertToPostMessageString,
  getJavascriptSource,
} from '../jsBuilder';

describe('jsBuilder', () => {
  it('toString works', () => {
    /* eslint-disable no-alert */
    const obj = {
      test: 'hello world',
      func() {
        alert('hello');
      },
    };
    /* eslint-enable no-alert */

    expect(toString(obj)).toMatchSnapshot();
    expect(toString(undefined)).toBe('{}');
  });

  it('convertToPostMessageString works', () => {
    /* eslint-disable no-alert */
    const obj = {
      test: 'hello world',
      func() {
        alert('hello');
      },
    };
    /* eslint-enable no-alert */

    expect(convertToPostMessageString(obj)).toMatchSnapshot();
  });

  it('getJavascriptSource works', () => {
    const obj = {
      option: {
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
      },
    };

    expect(getJavascriptSource(obj)).toMatchSnapshot();
  });
});
