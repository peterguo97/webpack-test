const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: {
        index: path.join(__dirname, './src/main.js'),
        // vendor: ['react', 'react-dom', 'react-router-dom'],
    },
    output: {
        filename: '[name].[hash:8].js',
        path: path.join(__dirname, './dist'),
        publicPath: './',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            components: path.resolve(__dirname, './src/components/'),
            assets: path.resolve(__dirname, './src/assets/'),
        }
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
};
