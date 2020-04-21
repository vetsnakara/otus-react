module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["storybook-static"],
  setupFilesAfterEnv: [
    "<rootDir>/internals/jestSettings.js"
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  },
  "moduleNameMapper": {
    "\\.(css|less|s[ac]ss)$": "<rootDir>/internals/__mocks__/styleMock.js",
  }
};