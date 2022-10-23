const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  mode: isProd ? "production" : "development",
  entry: {
    index: {
      import: "./src/app/index.tsx",
      dependOn: "shared",
    },
    shared: ["react", "react-dom"],
  },
  devtool: isProd ? false : "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "dist/app"),
  },
  optimization: {
    runtimeChunk: "single",
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(__dirname, "src/app/public", "index.html") }),
  ],
  devServer: {
    static: { directory: path.join(__dirname, "src/app/pulbic") },
    compress: true,
    port: 5000,
    open: true,
  },
};
