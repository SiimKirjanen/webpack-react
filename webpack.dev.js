const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common');

module.exports = webpackMerge(webpackCommonConfig, {
    mode: 'development',
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
    }
});