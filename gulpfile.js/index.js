const plugins = require(`./modules/plugins.js`).plaginsObject;
const util = require(`./modules/util.js`).util;
// const defaultArray = [`makeImagesSvg`, `makeImages`, `createSprite`, `getStyleFile`, `getScriptFile`, `createWebp`, `transformPug`, `getWatchers`, `browsersync`];
const defaultArray = [`makeImagesSvg`, `makeImages`, `createSprite`, `getStyleFile`, `runWebpack`, `createWebp`, `transformPug`, `getWatchers`, `browsersync`];
const testArray = [`browsersyncTest`]
// const testArray = [`runWebpack`]
const buildArray = [`clean`, `cleanImg`, `makeImagesSvg`, `makeImages`, `createSprite`, `getStyleFileDist`, `runWebpack`, `createWebp`, `transformPug`, `getCopying`]
// const buildArray = [`clean`, `cleanImg`, `makeImagesSvg`, `makeImages`, `createSprite`, `getStyleFileDist`, `getScriptFile`, `createWebp`, `transformPug`, `getCopying`]

// const css = [`getStyleFile`]
// exports.css = plugins.gulp.parallel(util.getTasksIndex(css))

exports.default = plugins.gulp.parallel(util.getTasksIndex(defaultArray));
exports.test = plugins.gulp.parallel(util.getTasksIndex(testArray));
exports.build = plugins.gulp.series(util.getTasksIndex(buildArray))
