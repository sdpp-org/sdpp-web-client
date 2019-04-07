module.exports = {
  plugins: [
    ['module-resolver', {
      'alias': {
        "@@apis": "./src/apis",
      },
    }],
  ],
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    "@babel/preset-typescript",
  ],
};
