const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const env = process.env.NODE_ENV === 'production' ? (
  new webpack.EnvironmentPlugin({ ...process.env })
) : (
  new Dotenv()
)

module.exports = webpackEnv => {
  const publicPath = webpackEnv.NODE_ENV === 'local' ? {
    publicPath: '/'
  } : {}
  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve('.'),
      ...publicPath
    },
    module: {
      rules: [
        { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        { test: /\.s(a|c)ss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
        { test: /\.(png|jpe?g|gif)$/i, use: 'file-loader' }
      ]
    },
    devServer: {
      publicPath: '/',
      contentBase: path.resolve('src'),
      hot: true,
      open: true,
      port: 8000,
      watchContentBase: true,
      historyApiFallback: true
    },
    plugins: [
      new Dotenv(),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'index.html',
        inject: 'body'
      }),
      env
    ]
  }
}
