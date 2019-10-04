module.exports = {
  preset: "react-native",
  notify: true,
  verbose: false,
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js"
  },
  testPathIgnorePatterns: ["node_modules/", "<rootDir>/src/__tests__/setup/"],
  transformIgnorePatterns: ["node_modules/(?!react-native)", "example/"],
  setupFilesAfterEnv: ["<rootDir>/src/__tests__/setup/setupJest.js"],
  coverageDirectory: "./coverage/",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js"]
}
