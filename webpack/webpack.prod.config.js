const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

const merge = require("webpack-merge");
const commonConfig = require("./webpack.common.config");

const prodConfig = {
  context: __dirname,

  mode: "production",

  output: {
    path: path.resolve("./build"),
    filename: "index.js"
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract("css-loader")
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract("css-loader!sass-loader")
      }
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new ExtractTextPlugin({
      filename: "[name].css"
    })
  ]
};

module.exports = merge.smart(prodConfig, commonConfig);
