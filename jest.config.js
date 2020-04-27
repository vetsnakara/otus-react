module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["storybook-static"],
  setupFilesAfterEnv: [
    "<rootDir>/test/jestSettings.ts"
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  },
  "moduleNameMapper": {
    "\\.(css|less|s[ac]ss)$": "<rootDir>/test/__mocks__/styleMock.ts",
    "^types(.*)$": "<rootDir>/src/types$1",
    "^data(.*)$": "<rootDir>/data$1",
    "^test(.*)$": "<rootDir>/test$1",
    "^shared(.*)$": "<rootDir>/src/components/shared$1",
  }
};