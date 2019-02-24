const webpack = require('webpack');
const path = require('path');

const config = {
    entry: __dirname + '/js/app/Index.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.min.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    performance: {
        hints: false
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    "presets": ["@babel/preset-env, @babel/preset-react"]
                }
            }
        ],
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
};

module.exports = config;
