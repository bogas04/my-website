module.exports = {
  entry: './src/main.jsx',
  output: {
    path: './dist/js',
    filename: 'website.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [['es2015', { modules: false }], 'react']
        }
      }
    ]
  }
}
