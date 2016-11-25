var path = require('path');
var webpack = require('webpack');
 
var config = {
	context: path.join(__dirname, '..', 'src'),
	entry: [
		'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
		'./client.jsx',
	],
	output: {
		path: path.join(__dirname, '..', 'public'),
		filename: 'bundle.js',
	},
	module: {
		loaders: [
			{
				test:/\.jsx?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				},
			},
		]
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
		}),
	]
};

module.exports = config;
