const path = require('path');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackCommonConfig = require('./webpack.common');

module.exports = webpackMerge(webpackCommonConfig, {
    mode: 'development',
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                  'style-loader', 
                  {
                    loader: 'css-loader',
                    options: {
                      modules: {
                        localIdentName: '[local]__[hash:base64:5]'
                      },
                    },
                  },
                  'sass-loader'
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: false,
            meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'}
        })
    ]
});