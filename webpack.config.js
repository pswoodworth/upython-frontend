var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
      'whatwg-fetch',
      "./src/js/entry.js" 
    ],
    output: {
        path: __dirname,
        filename: "./build/build.js",
    },
    module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loaders: ['babel-loader']
          },
        ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {warnings: false},
        output: {comments: false},
        sourceMap: true
      })
    ]
};