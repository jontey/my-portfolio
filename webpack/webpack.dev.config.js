const webpack = require("webpack");
const path = require("path");

const { mergeWithRules } = require("webpack-merge");
const commonConfig = require("./webpack.common.config");

const devConfig = {
  context: __dirname,

  mode: "development",

  output: {
    publicPath: "/",
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
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

  plugins: [new webpack.HotModuleReplacementPlugin()],
};

const mergedConfig = mergeWithRules({
  module: {
    rules: {
      test: "match",
      use: "replace",
    },
  },
})(commonConfig, devConfig);

// HMR is built into webpack-dev-server v5

module.exports = mergedConfig;
