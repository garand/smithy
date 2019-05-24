const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: [
      './app/src/index.js',
      './app/src/index.css',
    ]
  },
  output: {
    path: path.resolve(__dirname, './app/dist')
  },
  devServer: {
    host: '0.0.0.0',
    contentBase: './app/dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/src/index.html'
    }),
    new MiniCssExtractPlugin(),
  ],
};
