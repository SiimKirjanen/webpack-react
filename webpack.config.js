const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, "/dist"),
        filename: 'bundle.[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: "babel-loader"
            },
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
            template: './src/index.html'
        })
    ]
};