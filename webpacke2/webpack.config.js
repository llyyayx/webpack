var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        main:'./src/script/main.js',
        a: './src/script/a.js',
        b: './src/script/b.js',
        c: './src/script/c.js',
    }, //打包入口
    output: {                         //打包好存放的路径和文件名
        path: './dist',
        filename: 'js/[name]-[chunkhash].js',
        publicPath: 'http://cdn.com/' //上线地址 输出= publicPath+filename
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            inject: 'head',                 //在哪里出入（不写行内就写head）
            title: 'webpack is good',
            date: new Date(),
            minify:{                    //压缩
               removeComments: true,  //删除注释
               //collapseWhitespace: true  //去除空格
            },
            chunks: ['main','a'],       //引入js块（只引用有用的）
            excludeChunks: ['b','c']    //不引入的js块,其他的将会全部引入
        }),
        new htmlWebpackPlugin({
            filename: 'a.html',
            template: 'index.html',
            inject: 'head',
            title: 'webpack is a',
            date: new Date(),
            minify:{                    //压缩
               removeComments: true,  //删除注释
               //collapseWhitespace: true  //去除空格
            },
            chunks: ['main', 'a'],
            excludeChunks: ['b', 'c']
        }),
        new htmlWebpackPlugin({
            filename: 'b.html',
            template: 'index.html',
            inject: 'head',
            title: 'webpack is b',
            date: new Date(),
            minify:{                    //压缩
               removeComments: true,  //删除注释
               //collapseWhitespace: true  //去除空格
            },
            chunks: ['main', 'b'],
            excludeChunks: ['a', 'c']
        }),
        new htmlWebpackPlugin({
            filename: 'c.html',
            template: 'index.html',
            inject: 'head',
            title: 'webpack is c',
            date: new Date(),
            minify:{                    //压缩
               removeComments: true,  //删除注释
               //collapseWhitespace: true  //去除空格
            },
            chunks: ['main', 'c'],
            excludeChunks: ['a', 'b']
        }),
    ]
}