'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const postcss = [
  require('autoprefixer')(),
  require('postcss-simple-vars')(),
  require('postcss-nested')(),
  require('precss')
];

module.exports = {
  entry: {
    client: './client/index.js'
  },
  output: {
    path: path.join(__dirname, '../dist/assets'),
    filename: '[name].js',
    publicPath: './assets'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: [/node_modules/]
      },
      {
        test: /\.scss/,
        loaders: ['style','css','sass']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loaders: ['url'],
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  browserlist: ['last 2 versions', 'ie > 8'],
  babel: {
    babelrc: false,
    presets: [
      ['es2015', {modules: false}],
      'stage-1'
    ]
  },
  postcss,
  vue: {
    loaders: {},
    postcss
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'portfolio',
      template: __dirname + '/index.html',
      filename: '../index.html'
    })
  ]
};
