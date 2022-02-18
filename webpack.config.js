const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
});

var path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "src")],
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: {
          loader: "style-loader!css-loader",
        },
      },
    ],
  },
  plugins: [htmlPlugin],
};
