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

// Prepend HMR entries to the existing entry
mergedConfig.entry.index = [
  "react-hot-loader/patch",
  "webpack-dev-server/client?http://localhost:8080",
  "webpack/hot/only-dev-server",
].concat(mergedConfig.entry.index);

module.exports = mergedConfig;
