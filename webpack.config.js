const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./simulator.js",
  output: {
    filename: "simulator.js",
    path: path.resolve(__dirname, "public", "packs")
  },
  externals: {
    jquery: "jQuery"
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};
