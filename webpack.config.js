// let path = require("path")
// module.exports = {
//   entry: './index.js',
//   output: {
//     path: path.resolve(__dirname, './dist'),
//     publicPath: '/dist/',
//     filename: 'index.js',
//     libraryTarget: 'umd',
//     umdNamedDefine: true
//   }
// ｝
const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: "./index.js", //入口文件，就是上步骤的src目录下的index.js文件，
	output: {
		path: path.resolve(__dirname, './dist'), //输出路径，就是上步骤中新建的dist目录，
		publicPath: '/dist/',
		filename: 'index.js',
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	module: {
		rules: [{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.(sass|scss)/,
				use: [{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					},
					{
						loader: "sass-loader"
					}
				]
			},
			{
				test: /\.js$/,
				exclude: /node_modules|vue\/dist|vue-router\//,
				loader: 'babel-loader',
			},
			{
				test: /\.(png|jpg|gif|ttf|svg|woff|eot)$/,
				loader: 'url-loader',
				query: {
					limit: 30000,
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		})
	]
};
