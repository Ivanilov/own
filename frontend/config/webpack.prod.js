const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: './js/[name].bundle.[contenthash].js'
  },
  devtool: 'source-map',
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'initial'
    }
  },
  plugins: [new CleanWebpackPlugin()]
});
