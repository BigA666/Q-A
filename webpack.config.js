const webpack = require('webpack')
const path = require('path')
module.exports = {
    entry: {
        bundle: './src/main.js',
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist' // 服务环境下可以不写
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /(\.js|\.jsx)$/,
                use: ['babel-loader']
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(eot|svg|ttf|woff)$/,
                use: ['file-loader']
            },
            {
                test:/\.(png|jpg)$/,
                loader: 'url-loader',
                options: {
                    limit: '1024'
                }
            }
            
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'NODE_ENV': '"development"'  // 生产环境   'production'是变量
        })
    ],
    devServer: {
        historyApiFallback: true, // 让BrowerRouter刷新后还会有页面 --> 亲测不管用
        open: true,
        port: 8990,
        noInfo: true,
        inline: true
        // index: 'index.html'   // 默认打开页面
    },
    resolve: {  
        extensions: ['.js', '.jsx'],  // resolve.extensions  省略后缀名
        alias: {
            '@' : path.join(__dirname, '/src')
        }
    }
}