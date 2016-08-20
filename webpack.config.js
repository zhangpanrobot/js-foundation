const webpack = require('webpack')
const path = require('path')

module.exports = {
	debug: true,
	entry: {
		main: './src/script/index.js'
	},
	output: {
		path: path.join(__dirname, 'dist/'),
		filename: 'script/[name].js',
		publicPath: '/'
	},
	resolve: {
		root: './src',
		extensions: ['', '.js', '.jsx']
	},
	eslint: {
		configFile: './.eslintrc',
		failOnWarning: false,
		failOnError: false
	},
	module: {
		exprContextRegExp: /$^/,
		exprContextCritical: false,
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loaders: ['babel']
		}]
	},
	plugins: []
}
