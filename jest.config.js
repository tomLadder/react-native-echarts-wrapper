module.exports = {
  preset: 'react-native',
  notify: true,
  verbose: false,
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  transformIgnorePatterns: ['node_modules/(?!react-native)'],
  coverageDirectory: './coverage/',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js',
  ],
};
