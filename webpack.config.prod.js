require('dotenv').config()
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require('./webpack.config.common')

module.exports = merge(common, {
  mode: process.env.PROD,
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
			}
		]
	},
})