var webpack = require('webpack');
var $ = require ('jquery')
module.exports = {
    entry: {
        main: "./app/static/scripts/jsx/main.js",
        suggestion: "./app/static/scripts/jsx/suggestion.js",
        navbar: "./app/static/scripts/jsx/navbar.js",
        question_list: "./app/static/scripts/jsx/question_list.js",
        answer: "./app/static/scripts/jsx/answer.js",
        fire: "./app/static/scripts/jsx/fire.js",
    },
    output: {
        path: "./app/static/scripts/js",
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: []
}