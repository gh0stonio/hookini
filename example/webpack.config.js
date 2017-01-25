import path from 'path'

module.exports = {
  entry: './example/app.js',
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/dist',
    filename: 'hookini-example.js'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  debug: true,
  devtool: 'source-map',
  devServer: {
    contentBase: './example'
  }
}
