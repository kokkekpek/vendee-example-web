import dotenv from 'dotenv'
import { merge } from 'webpack-merge'
import { common } from './common'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import path from 'path'

dotenv.config()
const port = process.env.PORT ?? 3000

module.exports = merge<Object>(common, {
  mode: 'development',
  devServer: {
    hot: true,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, '../public')
    },
    port
  },
  devtool: 'cheap-module-source-map',
  plugins: [new ReactRefreshPlugin()]
})