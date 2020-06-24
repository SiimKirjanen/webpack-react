const path = require('path');

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
    optimization: {
      namedChunks: true,
      splitChunks: {
        cacheGroups: {
            commons: { test: /[\\/]node_modules[\\/]/, name: "common", chunks: "all" }
        }
      }
    },
    plugins: []
};