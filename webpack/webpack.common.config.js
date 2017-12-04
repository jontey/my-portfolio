const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  context: __dirname,

  entry: {
    index: [
      '../src/index.js'
    ]
  },

  module: {
    rules: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png$|\.jpg$|\.gif$/,
        loader: 'file-loader'
      }, {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: '../src/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.ProvidePlugin({
      Popper: ['popper.js', 'default']
    })
  ]
};

module.exports = config;
