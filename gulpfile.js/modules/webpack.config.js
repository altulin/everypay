module.exports = {
  mode: 'none',
  // entry: `/_src/js/main.js`,
  optimization: {
    // minimize: false,

  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['latest', { modules: false }],
          ],
        },
      },
    ],
  },
}
