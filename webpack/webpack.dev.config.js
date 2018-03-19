const webpack = require("webpack");
const path = require("path");

const merge = require("webpack-merge");
const commonConfig = require("./webpack.common.config");

const devConfig = {
  context: __dirname,

  mode: "development",

  entry: {
    index: [
      "react-hot-loader/patch",
      "webpack-dev-server/client?http://localhost:8080",
      "webpack/hot/only-dev-server"
    ]
  },

  output: {
    publicPath: "/"
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?sourceMap"
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};

module.exports = merge.smart(devConfig, commonConfig);
