module.exports = {
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        displayName: true,
        ssr: true,
      },
    ],
    ['module-resolver', {
      'alias': {
        "@@apis": "./src/universal/apis",
        "@@modules": "./src/universal/modules",
      },
    }],
  ],
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    "@babel/preset-typescript",
  ],
};
