// webpack.config.js
module.exports = {
  entry: './app/main.js',
  output: {
    filename: './dist/js/main.js'       
  },
  module : {
  	loaders : [
  		{ test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" }
  	]
  }
};