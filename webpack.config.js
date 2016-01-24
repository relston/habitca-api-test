var ExtractTestPlugin = require("extract-text-webpack-plugin");
var LiveReloadPlugin = require('webpack-livereload-plugin');
// webpack.config.js
module.exports = {
  entry: './app/main.js',
  devtool: 'cheap-source-map',
  output: {
    filename: './dist/js/main.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module : {
  	loaders : [
      { test: /\.scss$/, loader: ExtractTestPlugin.extract("style-loader", "css-loader!sass-loader") },
  		{ test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/, query:{ presets: ['react']} }
  	]
  },
  plugins: [
    //new LiveReloadPlugin({appendScriptTag:true})
  	new ExtractTestPlugin("./dist/css/style.css")
  ]
};