const path = require('path');

const cwd = process.cwd();
const WEBPACK_PATH = path.resolve(cwd, 'internals', 'webpack');

module.exports = {
  dist: path.resolve(cwd, 'dist'),
  distPublicBundle: path.resolve(cwd, 'dist/bundle'),
  distUniversal: path.resolve(cwd, 'dist/universal'),
  src: path.resolve(cwd, 'src'),
  webpackConfigClientLocalWeb: path.resolve(WEBPACK_PATH, 'webpack.config.client.local.web'),
  webpackConfigClientProdWeb: path.resolve(WEBPACK_PATH, 'webpack.config.client.prod.web'),
  webpackConfigUniversalLocal: path.resolve(WEBPACK_PATH, 'webpack.config.universal.local'),
  webpackConfigUniversalProd: path.resolve(WEBPACK_PATH, 'webpack.config.universal.prod'),
};
