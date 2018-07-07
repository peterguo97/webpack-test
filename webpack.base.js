const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require('path');
module.exports = {
    entry:{ 
        index: __dirname + '/src/main.js',
        vendor: ['react','react-dom']
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].[hash:8].js'
    },

    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                }),
                exclude: /node_modules/
            }
        ]
    },
    
    plugins: [
        new CleanWebpackPlugin(
            // 需要删除的文件夹或文件
            [path.join(__dirname, './dist/*.*')],
            {
                // root目录
                root: path.join(__dirname, './')
            }
        ),
        new HtmlWebpackPlugin({
            template: './src/templet.html',
            filename: 'index.html',
            title: 'index',
            hash: true,
            minify: {
                removeAttributeQuotes: true
            }
        }),
        new ExtractTextPlugin('[name].[contenthash:8].css')
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    minChunks: 2,
                    maxInitialRequests: 5,
                    minSize: 2,
                    name: 'common'
                }
            }
        }
    }
}