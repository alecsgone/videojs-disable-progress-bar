const path = require('path')
const webpack = require('webpack')
const HTMLPage = require('html-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')

module.exports = {
  devServer: {
    overlay: true,
    open: true,
    port: 5050,
    hot: true,
    inline: true,
    stats: 'errors-only',
    disableHostCheck: true,
  },

  entry: {
    example: path.resolve(__dirname, 'src/example.js'),
  },

  devtool: 'cheap-source-map',

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
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '',
  },

  plugins: [
    new CaseSensitivePathsPlugin(),

    new webpack.HotModuleReplacementPlugin(),

    new HTMLPage(),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
}
