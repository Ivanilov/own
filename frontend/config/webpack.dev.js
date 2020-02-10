const common = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    compress: true,
    overlay: true,
    hot: true
  },
  devtool: 'cheap-module-source-map'
});
