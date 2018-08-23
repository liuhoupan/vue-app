var path=require('path')
var webpack=require('webpack')
var htmlWebpackPlugin=require('html-webpack-plugin')
var VueLoaderPlugin=require('vue-loader/lib/plugin');                            


module.exports={
	mode:"development",
	entry:path.join(__dirname,'./src/main.js'),
	output:{
		path:path.join(__dirname,'./dist/'),
		filename:'index.js'
	},
	plugins:[
		new htmlWebpackPlugin({
			template:path.join(__dirname,'./src/index.html'),
			filename:'index.html'
		}),
		new VueLoaderPlugin()
	],
	module:{
		rules:[
			{test:/\.css$/,use:['style-loader','css-loader']},
			{test:/\.less$/,use:['style-loader','css-loader','less-loader']},
			{test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
			{test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
			{test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=23800&name=[hash:8][name].[ext]'},
			{test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
			{test:/\.vue$/,use:'vue-loader'}
		]
	}
}