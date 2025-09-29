// It uses nodejs feature

// To build an absolute path using path package
const path = require("path");
const CleanWebpack = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js", // can give any name
    path: path.resolve(__dirname, "dist"), // where to put the generated bundle
  },
  devtool: "none", // not generate sourcemap
  devServer: {
    static: [
      {
        directory: path.join(__dirname),
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // fine all import that ends with ts and apply ts-loader to that file
        use: "ts-loader",
        exclude: "/node_modules/", // exclude looking for file in node_modules
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"], // looks for js and ts file and bundles
  },
  plugins: [
    // plugin to delete everything in the dist folder when new changes pushed
    // which can be done using clean-webpack-plugin dependency
    new CleanWebpack.CleanWebpackPlugin(),
  ],
};
