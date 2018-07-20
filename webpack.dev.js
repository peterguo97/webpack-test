const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base');

const dev = {
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        port: 8080,
        publicPath: '/',
        host: 'localhost',
        overlay: true,
        compress: true,
        open: true,
        hot: true,
        inline: true,
        historyApiFallback: true,
        progress: true,
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
};

module.exports = merge(base, dev);
