module.exports = {
  preset: 'react-native',
  notify: true,
  verbose: false,
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  testPathIgnorePatterns: ['node_modules/', 'example/'],
  transformIgnorePatterns: ['node_modules/(?!react-native)', 'example/'],
  coverageDirectory: './coverage/',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js',
  ],
};
