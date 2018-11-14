const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const path = require('path');


module.exports = {
entry: './example/src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test:/\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  },
  output: {
    path: path.join(__dirname, '../', '/dist'),
    publicPath: '/react-form-elementor/',
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./example/src/index.html",
      filename: "./index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};