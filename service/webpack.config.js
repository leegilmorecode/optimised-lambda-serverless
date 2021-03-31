const path = require("path");
const slsw = require("serverless-webpack");
const isLocal = slsw.lib.webpack.isLocal;

module.exports = {
  mode: isLocal ? "development" : "production",
  devtool: slsw.lib.webpack.isLocal
    ? "cheap-module-eval-source-map"
    : "source-map",
  entry: slsw.lib.entries,
  target: "node",
  resolve: {
    extensions: [".mjs", ".ts", ".js"],
    preferRelative: true,
  },
  output: {
    libraryTarget: "commonjs2",
    path: path.join(__dirname, ".webpack"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
    ],
  },
};
