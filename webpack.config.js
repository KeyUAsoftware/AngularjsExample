module.exports = {
  context: __dirname + '/app',
  entry: './scripts/app.js',
  output: {
    path: __dirname + '/app',
    filename: './bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js/, loader: 'babel-loader'},
      {test: /\.html$/, loader: 'raw'},
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.scss$/, loader: 'style!css!sass'}
    ]
  }
};