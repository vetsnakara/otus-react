const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',

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
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts',
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),

    new CopyWebpackPlugin([
      { from: './public/favicon.ico' }
    ])
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      types: path.resolve(__dirname, "../src/types"),
      data: path.resolve(__dirname, "../data"),
      test: path.resolve(__dirname, "../test"),
      assets: path.resolve(__dirname, '../src/assets'),
      shared: path.resolve(__dirname, '../src/components/shared'),
    }
  }
}
