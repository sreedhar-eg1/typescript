// It uses nodejs feature

// To build an absolute path using path package
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js", // can give any name
    path: path.resolve(__dirname, "dist"), // where to put the generated bundle
    publicPath: "/dist/",
  },
  devtool: "inline-source-map",
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
};
