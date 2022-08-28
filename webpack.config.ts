const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  output: {
    filename: 'yamlify-object.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'yamlifyObject',
    libraryTarget: 'umd',
    clean: true,
  },
};
