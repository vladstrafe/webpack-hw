require('dotenv').config()
const webpack = require('webpack')

const common = require('./common')

module.exports = merge(common, {
  mode: process.env.DEV,
  devtool: 'eval-cheap-source-map',
  devServer: {
		contentBase: './dist',
		overlay: true
  },
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
			}
		]
	},
  plugins: [new webpack.HotModuleReplacementPlugin()]
})