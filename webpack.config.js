var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

const PATH = {
  app: path.join(__dirname, 'app'),
  dist: path.join(__dirname, 'dist'),
  webpack: path.join(__dirname, 'webpack')
}

const config = {
  entry: [
    'babel-polyfill',
    path.join(PATH.app, 'index.jsx')
  ],
  output: {
    path: PATH.dist,
    filename: 'image-data-ui.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        test: /\.(js|jsx)$/
      },
      {
        loader: 'style!css',
        test: /\.css$/
      },
      {
        loader: 'file',
        test: /\.(woff|ttf|eot)$/
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(PATH.webpack, 'index.html')
    })
  ]
}

module.exports = config
