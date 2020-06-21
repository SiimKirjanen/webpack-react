const path = require('path');
const webpackMerge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackCommonConfig = require('./webpack.common');

module.exports = webpackMerge(webpackCommonConfig, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                  MiniCssExtractPlugin.loader, 
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
        new MiniCssExtractPlugin({
            filename: '[name].[contentHash].css'
        }),
        new CleanWebpackPlugin()
    ],
});