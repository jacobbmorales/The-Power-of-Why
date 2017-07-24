var webpack = require('webpack');
var $ = require('jquery');
var firebase = require('firebase');
var injectTapEventPlugin = require('react-tap-event-plugin');
var path = require('path');
module.exports = {
    entry: {
        main: "./app/static/scripts/jsx/main.js",
        suggestion: "./app/static/scripts/jsx/suggestion.js",
        navbar: "./app/static/scripts/jsx/navbar.js",
        question_list: "./app/static/scripts/jsx/question_list.js",
        answer: "./app/static/scripts/jsx/answer.js",
        signin: "./app/static/scripts/jsx/signin.js",
        admin: "./app/static/scripts/jsx/admin.js",
        admin_suggestion: "./app/static/scripts/jsx/admin_suggestion.js",
        admin_panel: "./app/static/scripts/jsx/admin_panel.js",
    },
    output: {
        path: path.join(__dirname, './app/static/scripts/js'),
        filename: "[name].bundle.js",
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