import path from 'path'
import { merge } from 'webpack-merge'
import { common } from './common'
import CopyWebpackPlugin from 'copy-webpack-plugin'

module.exports = merge<Object>(common, {
  mode: 'production',
  output: {
    filename: 'js/bundle.[contenthash].min.js',
    path: path.resolve(__dirname, '../dist')
  },
  devtool: 'source-map',
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [new CopyWebpackPlugin({patterns: [{from: '../public'}]})]
})
