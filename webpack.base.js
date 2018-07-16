const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: {
        index: path.join(__dirname, './src/main.js'),
        // vendor: ['react', 'react-dom', 'react-router-dom'],
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[hash:8].js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
                include: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader?modules&localIdentName=[name]-[hash:base64:5]',
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|gif|ttf|eot|woff(2)?)(\?[=a-z0-9]+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        query: {
                            limit: '8192',
                            name: 'images/[name]_[hash:7].[ext]',
                        },
                    },
                }],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(
            // 需要删除的文件夹或文件
            [path.join(__dirname, './dist/*.*')],
            {
                // root目录
                root: path.join(__dirname, './'),
            },
        ),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
          }),
        // new ExtractTextPlugin('[name].[hash:8].css'),
        new HtmlWebpackPlugin({
            template: './src/templet.html',
            filename: 'index.html',
            title: 'index',
            hash: true,
            minify: {
                removeAttributeQuotes: true,
            },
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    minChunks: 2,
                    maxInitialRequests: 5,
                    minSize: 2,
                    name: 'common',
                },
            },
        },
    },
};
