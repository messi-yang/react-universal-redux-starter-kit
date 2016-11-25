var path = require('path');
var webpack = require('webpack');
 
var config = {
	context: path.join(__dirname, '..', 'src'),
	entry: [
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
		new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
		}),
	]
};

module.exports = config;
