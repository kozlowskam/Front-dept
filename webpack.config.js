const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDevelopment = process.env.NODE_ENV === 'development'
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const fs = require('fs');
const Path = require('path');

const PRODUCTION = process.env.NODE_ENV === 'production';
const HASH_BUNDLE = PRODUCTION ? '[chunkhash:16]' : '[name]-dev';
const HASH_ASSETS = PRODUCTION ? '[hash:16]' : '[name]-dev';
const ROOT = Path.join(__dirname);


module.exports = {
	context: Path.join(ROOT, 'src'),
	entry: {
		'main': [
			'whatwg-fetch',
			'./styles/main.scss',
			'./index.js'
		]
	},
	target: 'web',
	output: {
		path: Path.join(ROOT, 'dist'),
		publicPath: '/',
		filename: `scripts/${HASH_BUNDLE}.js`,
		library: '[name]',
		libraryTarget: 'umd'
	},
	optimization: {
		minimizer: [new UglifyJsPlugin({
			uglifyOptions: {
				'compress': {
					'drop_console': true
				}
			}
		})]
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: false
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							config: {
								path: Path.join(ROOT, 'build', 'postcss.config.js')
							}
						}
					},
					'sass-loader'
				]
			},
			{
				test: /\.(jpe?g|png|gif|mp4|mov|webm|ogv|svg)$/i,
				loader: 'file-loader',
				query: {
					name: `images/${HASH_ASSETS}.[ext]`
				}
			},
			{ test: /\.(woff|woff2|eot|ttf)$/, 
				use: ['url-loader?limit=100000'] 
			}
		]
	},
	resolveLoader: {
		modules: [
			'node_modules'
		]
	},
	resolve: {
		modules: [
			Path.join(ROOT, 'src'),
			Path.join(ROOT, 'node_modules')
		],
		extensions: ['.js'],
		alias: {
			'data': Path.resolve(ROOT, 'src/data'),
			'images': Path.resolve(ROOT, 'src/static/images'),
			'icons': Path.resolve(ROOT, 'src/static/icons'),
			'fonts': Path.resolve(ROOT, 'src/static/fonts')
		}
	},
	devServer: {
		historyApiFallback: true,
	},

	plugins: [
		new HtmlWebPackPlugin({
			template: "./index.html",
			favicon: "./static/logos/d-logo.png"
		}),
		new MiniCssExtractPlugin({
			filename: `styles/${HASH_BUNDLE}.css`
		})
	]
};