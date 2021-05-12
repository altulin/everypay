module.exports = {
  mode: 'production',
  // entry: `/_src/js/main.js`,
  optimization: {
    // minimize: false,

  },
  module: {
    rules: [{
      test: /\.js$/, // запустим загрузчик во всех файлах .js
      exclude: /node_modules/, // проигнорируем все файлы в папке  node_modules
      loader: 'babel-loader',
    }]
  }


}
