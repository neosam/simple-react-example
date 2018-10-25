const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
       // exclude: /node_modules/,
      }
    ]
  },
};