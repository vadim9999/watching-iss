const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { babel, typescript, css, asset, scss } = require("./helpers");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV == "production";

module.exports = {
  entry: "./src/index.tsx",
  output: { path: path.join(__dirname, "build"), filename: "index.bundle.js" },
  mode: process.env.NODE_ENV || "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  // devServer: { static: { directory: path.join(__dirname, "src") } },
  devServer: { static: { directory: path.join(__dirname, "build") } },
  module: {
    rules: [babel(), typescript(), scss(), css(), asset()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
    ...(isProduction ? [new MiniCssExtractPlugin()] : []),
  ],
};
