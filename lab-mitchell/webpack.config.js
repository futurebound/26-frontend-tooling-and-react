'use strict';

const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //extracts CSS and using that to generate CSS static files

//rest is exported
module.exports = {
  // devtool: 'source-maps', 
  entry: `${__dirname}/src/main.js`,
  output: {
    path: `${__dirname}/build`, //directory where build will be placed on local machine
    // [square bracket] syntax in here will run,,, something.
    filename: 'bundle-[hash].js', //name of file for JS build
    publicPath: '/', //base path for routing in browser (ex. mywebsite.com/app)
  },
  plugins: [
    new HtmlPlugin({template: `${__dirname}/src/index.html`}), //defining template for HTML
    new ExtractTextPlugin('bundle-[hash].css'),
  ],
  module: { //new standard is module, AKA loaders
    rules: [
      //test for REGEX pattern that webpack should recognize, and use
      {
        test: /\.js$/, //any file ending in .js ($ is the 'anything ending in this pattern)
        exclude: /node_modules/, //ignore the whole directory of node_modules
        loader: 'babel-loader', //loader will take a string or an array
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
      },
    ],
  },
};