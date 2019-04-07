const babelRc = require('../internals/.babelrc');

console.log('App is launching...');

require("@babel/polyfill");

require('@babel/register')({
  extensions: [
    '.js',
    '.jsx',
    '.ts',
    '.tsx',
  ],
  ...babelRc,
});

require('./server/server.ts');
