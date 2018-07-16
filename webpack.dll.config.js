const webpack = require('webpack');
const path = require('path');
const WebpackParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

module.exports = {
    entry: {
        vendor: ['react', 'react-dom', 'react-router-dom'],
    },
     output: {
        path: path.join(__dirname, './dist'),
        filename: 'dll/[name]_dll.js',
        library: '_dll_[name]',
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, './dist/dll', 'manifest.json'),
            name: '_dll_[name]',
        }),
        new WebpackParallelUglifyPlugin({
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
        }),
    ],
};
