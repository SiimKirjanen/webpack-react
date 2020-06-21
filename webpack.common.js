const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, "/dist"),
        filename: 'bundle.[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: "babel-loader"
            },
            {
              test: /\.(png|jpg|svg|gif)$/,
              use: {
                loader: "file-loader",
                options: {
                  name: "[name].[ext]",
                  outputPath: "assets"
                }
              }
          },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};