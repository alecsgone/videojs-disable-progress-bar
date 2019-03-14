const path = require('path')
const webpack = require('webpack')
const HTMLPage = require('html-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: {
    DisableProgressBar: path.resolve(__dirname, 'src/DisableProgressBar.js'),
  },

  devtool: 'hidden-source-map',

  externals: [nodeExternals()],

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: `[name].js`,
    libraryTarget: 'commonjs2',
  },

  plugins: [new CaseSensitivePathsPlugin()],

  target: 'web',
}
