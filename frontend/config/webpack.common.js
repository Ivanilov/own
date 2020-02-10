const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');

const path = require('path');
const dirs = require('./dirs');

require('dotenv').config();

module.exports = {
  context: dirs.ROOT,
  entry: path.resolve(dirs.SRC, 'index.tsx'),
  output: {
    path: dirs.DIST
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx|ts|tsx)$/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Mister Cat',
      inject: false,
      template: HtmlWebpackTemplate,
      appMountId: 'root'
    }),
    new webpack.DefinePlugin({
      API_URL: JSON.stringify(process.env.API_URL)
    })
  ]
};
