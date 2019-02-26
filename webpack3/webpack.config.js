var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/app.js',
    output: {                         //打包好存放的路径和文件名
        path: './dist',
        filename: 'js/[name].js',
    },
	module:
    {
        loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            inject: 'body',                 //在哪里出入（不写行内就写head）
        }),
    ]
}