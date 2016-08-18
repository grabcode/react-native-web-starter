
const path = require('path')
const webpack = require('webpack')
const WriteFilePlugin = require('write-file-webpack-plugin');

const DIRECTORY = path.join(__dirname)

const devServer= {
  outputPath: path.join(__dirname, ''),
  contentBase: path.resolve(__dirname, 'src'),
  colors: true,
  quiet: true,
  noInfo: false,
  publicPath: '/assets/',
  historyApiFallback: false,
  host: '127.0.0.1',
  port: 3001,
  hot: false
};

module.exports = {
  devtool: 'source-map',
  devServer: devServer,

  entry: [
    path.join(__dirname, '../index.chrome.js')
  ],
  output: {
    path: devServer.outputPath,
    filename: 'bundle.js',
    publicPath: devServer.publicPath
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new WriteFilePlugin()
  ],
  resolve: {
    alias: {
      'react-native': 'react-native-web'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { cacheDirectory: true }
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        loader: 'url-loader',
        query: { name: '[name].[hash:16].[ext]' }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ["es2015",
            "stage-1",
            "react-native"
          ],
          plugins: [
            "transform-decorators-legacy"
          ]
        }
      }
    ]
  },
}
