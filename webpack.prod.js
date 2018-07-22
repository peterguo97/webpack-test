const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const base = require('./webpack.base');

const prod = {
    plugins: [
        new WebpackParallelUglifyPlugin(
            {
                uglifyJS: {
                    mangle: false,
                    output: {
                        beautify: false,
                        comments: false,
                    },
                    compress: {
                        warnings: false,
                        drop_console: true,
                        collapse_vars: true,
                        reduce_vars: true,
                    },
                },
            },
        ),
        new CleanWebpackPlugin(
            // 需要删除的文件夹或文件
            [path.join(__dirname, './dist/*.*')],
            {
                // root目录
                root: path.join(__dirname, './'),
            },
        ),
        new webpack.DllReferencePlugin({
            manifest: path.join(__dirname, './dist/dll', 'manifest.json'),
        }),
        new BundleAnalyzerPlugin(),
    ],
};

module.exports = merge(base, prod);
