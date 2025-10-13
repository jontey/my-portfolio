const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
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
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
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
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../images/Gemini_Generated_Image_2pu7t2pu7t2pu7t2.png"),
          to: "favicon.png",
        },
      ],
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
