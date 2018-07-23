const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const miniCssExtractPlugin = new MiniCssExtractPlugin({ filename: "index.css" });

module.exports = {
  entry: {
    css: "./css/index.scss", // This file gets delete by the rake task
    javascript: "./javascript/index.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          // "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: path.resolve(__dirname, '/dist')
            }
          },
          "css-loader",
          "sass-loader"
        ],
      }
    ]
  },
  plugins: [miniCssExtractPlugin],
  mode: "development",
  devtool: "source-map"
}
