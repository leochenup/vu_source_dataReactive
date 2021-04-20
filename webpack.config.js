const { resolve } = require("path");
const HTMLPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "built.js",
    path: resolve(__dirname, "dist"),
  },
  devServer: {
    contentBase: resolve(__dirname, "dist"),
    port: 3000,
    open: true,
  },
  plugins: [
    new HTMLPlugin({
      template: "./public/index.html",
    }),
  ],
  mode: "development",
};
