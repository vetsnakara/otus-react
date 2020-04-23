module.exports = {
  presets: [
    "@babel/env",
    "@babel/react",
    "@babel/typescript"
  ],
  plugins: ["transform-class-properties", "emotion"],
  env: {
    production: {
      plugins: ["emotion"],
    },
    development: {
      plugins: [["emotion", { sourceMap: true }]],
    },
  }
}