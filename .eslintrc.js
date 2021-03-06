module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 11,
  },
  rules:{
  "linebreak-style":0,
  "no-nested-ternary":0,
  "prefer-default-export":0,
  "line no-underscore-dangle":0,
  "import/prefer-default-export":0,
  "no-console":0,
  },
};
