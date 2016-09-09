'use strict';
const path = require('path');
const webpack = require('webpack');

const bootstrapEntryPoints = require('./webpack.bootstrap.config.js');

module.exports = {
  entry: [
    'font-awesome-loader',
    bootstrapEntryPoints.prod,
    './client/index.js'
  ],
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
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /bootstrap-sass\/assets\/javascripts\//,
        loader: 'imports?jQuery=jquery'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader'
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
  plugins: [
    // Need to move this
  ]
};
