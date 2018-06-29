var path = require('path');
var HtmlwebpackPlugin = require("html-webpack-plugin");
module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: {
		app: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: "app.js"
	},
	plugins: [
		new HtmlwebpackPlugin({
				title:"index",
				filename:"index.html",
				chunks:['app'],
				template:"./src/index-tem.html"
			}),
	],
	module: {
		rules: [
			{
				test: /.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'react'],
					}
				}
			}
		]
	}
}
