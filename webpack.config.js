var webpack = require('webpack');
var $ = require('jquery')
var firebase = require('firebase')
module.exports = {
    entry: {
        main: "./app/static/scripts/jsx/main.js",
        suggestion: "./app/static/scripts/jsx/suggestion.js",
        navbar: "./app/static/scripts/jsx/navbar.js",
        question_list: "./app/static/scripts/jsx/question_list.js",
        answer: "./app/static/scripts/jsx/answer.js",
    },
    output: {
        path: "./app/static/scripts/js",
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: []
}