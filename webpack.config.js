var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var DashboardPlugin = require('webpack-dashboard/plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  devtool: "cheap-eval-source-map",
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'app/main.jsx')
  ],
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './app',
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loader: 'babel',
        include: APP_PATH,
        exclude:'/(node_modules)/',
        query: {
          presets: ['es2015', 'react','stage-1'],
          plugins: ["transform-decorators-legacy"]
        }
      }, {
        test: /\.less$/,
        exclude:'/(node_modules)/',
        loader: 'style!css!less'
      }, {
        test: /\.css/,
        exclude:'/(node_modules)/',
        loader: 'style!css'
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000'
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: './build/template.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new DashboardPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
}