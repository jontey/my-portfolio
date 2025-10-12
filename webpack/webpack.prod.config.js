const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.config");

const prodConfig = {
  context: __dirname,

  mode: "production",

  output: {
    path: path.resolve("./build"),
    filename: "index.js",
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              api: "modern",
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
