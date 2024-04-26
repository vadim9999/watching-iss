const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : "style-loader";

const babel = () => ({
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: ["babel-loader"],
});

const typescript = () => ({
  test: /\.(ts|tsx)$/,
  exclude: /node_modules/,
  use: ["ts-loader"],
});

const scss = () => ({
  test: /\.s[ac]ss$/i,
  use: [stylesHandler, "css-loader", "postcss-loader", "sass-loader"],
});

const css = () => ({
  test: /\.css$/i,
  use: [stylesHandler, "css-loader", "postcss-loader"],
});

const asset = () => ({
  test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
  type: "asset",
});

module.exports = {
  babel,
  typescript,
  scss,
  css,
  asset,
};
