var webpack = require('webpack');
module.exports = {
  entry: {
    main: "./app/static/scripts/jsx/main.js"
  },
  output: {
    path: __dirname + "/app/static/scripts/js",
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
  plugins: [
  ]
};