const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  entry: "./src/index.jsx",
  mode: process.env.NODE_ENV !== "production" ? "development" : "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: {
                  tailwindcss: {
                    purge: [
                      "./src/**/*.html",
                      "./src/**/*.jsx",
                      "./src/**/*.css",
                    ],
                    // prefix: "tw-",
                  },
                  autoprefixer: {},
                },
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: {
                  tailwindcss: {
                    purge: [
                      "./src/**/*.html",
                      "./src/**/*.jsx",
                      "./src/**/*.css",
                    ],
                    // prefix: "tw-",
                  },
                  autoprefixer: {},
                },
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  devServer: {
    port: 8082,
  },

  plugins: [
    new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html"),
      filename: "index.html",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
};
