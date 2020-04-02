const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.ts',

  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: 'bundle.[hash].js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),

    new CopyWebpackPlugin([
      { from: 'src/favicon.ico' }
    ])
  ],

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
  }
}