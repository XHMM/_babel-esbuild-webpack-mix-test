const path = require("path");
const { ESBuildPlugin } = require("esbuild-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src/index.jsx"),
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              // presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
          {
            loader: "esbuild-loader",
            options: {
              loader: "jsx",
              target: "es2015",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", "jsx", ".json"],
  },
  plugins: [new ESBuildPlugin(), new HtmlWebpackPlugin()],
};
