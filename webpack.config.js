var webpack = require('webpack');
//var firebase = require("firebase/app");
//require("firebase/auth");
//require("firebase/database");
//var config = {
//    apiKey: "AIzaSyAoMDi3nrfpQgE3rtbptQF4vLVSzd-GE-4",
//    authDomain: "power-of-why.firebaseapp.com",
//    databaseURL: "https://power-of-why.firebaseio.com",
 //   projectId: "power-of-why",
//    storageBucket: "power-of-why.appspot.com",
//    messagingSenderId: "90138298651"
//};
//firebase.initializeApp(config);
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