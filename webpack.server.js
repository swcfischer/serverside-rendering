const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server/index.js',

  target: 'node',

  // checkout out what the externals property does
  externals: [nodeExternals()],

  output: {
    // Re-check what path.resolve does and how it differs from path.join()
    path: path.resolve('server-build'),
    filename: 'index.js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
      },
      {
        test: /\.css/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
