const path = require("path");
const slsw = require("serverless-webpack");
const isLocal = slsw.lib.webpack.isLocal;

module.exports = {
  mode: isLocal ? "development" : "production",
  devtool: isLocal ? "source-map" : false,
  entry: slsw.lib.entries,
  target: "node",
  stats: "summary",
  resolve: {
    extensions: [".mjs", ".ts", ".js"],
  },
  performance: {
    hints: false,
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
