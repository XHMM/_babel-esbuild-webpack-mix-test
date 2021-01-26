const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

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
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", "jsx", ".json"],
  },
  plugins: [new HtmlWebpackPlugin(), new BundleAnalyzerPlugin()],
};
