const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/* const { CleanWebpackPlugin } = require('clean-webpack-plugin'); */

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    open: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  clean: true,
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    /* new CleanWebpackPlugin(), */
    new HtmlWebpackPlugin({
      title: 'Webpack',
      template: './src/index.html',
    }),
  ],
};