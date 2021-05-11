const path = require(`${__dirname}/variables.js`).path;
const pluginsPath = require(`${__dirname}/plugins.js`).plaginsObject;

const src = pluginsPath.gulp.src;
const dest = pluginsPath.gulp.dest;
const webpack = pluginsPath.webpack;

module.exports.webpack = () => {
  return src(`_src/js/main.js`)
    .pipe(webpack(require(`${__dirname}/webpack.config.js`)))
    .pipe(dest(`_src/js/test.js`))
}
