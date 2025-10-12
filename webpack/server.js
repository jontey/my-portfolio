var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var config = require("./webpack.dev.config");

const compiler = webpack(config);

const server = new WebpackDevServer(
  {
    hot: true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    host: "0.0.0.0",
    port: 8080,
  },
  compiler
);

server.startCallback(() => {
  console.log("Listening at 0.0.0.0:8080");
});
