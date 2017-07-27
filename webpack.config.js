var webpack = require('webpack');
var $ = require('jquery');
var firebase = require('firebase');
var injectTapEventPlugin = require('react-tap-event-plugin');
var path = require('path');
module.exports = {
    entry: {
        admin_add: "./app/static/scripts/jsx/admin_add.js",
        admin_edit: "./app/static/scripts/jsx/admin_edit.js",
        admin_edit_question: "./app/static/scripts/jsx/admin_edit_question.js",
        admin_edit_question_specific: "./app/static/scripts/jsx/admin_edit_question_specific.js",
        admin_panel: "./app/static/scripts/jsx/admin_panel.js",
        admin_question_list: "./app/static/scripts/jsx/admin_question_list.js",
        admin_suggestion: "./app/static/scripts/jsx/admin_suggestion.js",
        admin_question_suggestion: "./app/static/scripts/jsx/admin_question_suggestion.js",
        answer: "./app/static/scripts/jsx/answer.js",
        main: "./app/static/scripts/jsx/main.js",
        navbar: "./app/static/scripts/jsx/navbar.js",
        question_list: "./app/static/scripts/jsx/question_list.js",
        signin: "./app/static/scripts/jsx/signin.js",
        suggestion: "./app/static/scripts/jsx/suggestion.js",
        question_suggestion: "./app/static/scripts/jsx/question_suggestion.js",
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