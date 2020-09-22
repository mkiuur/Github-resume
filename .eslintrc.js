module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'import/no-extraneous-dependencies': 0,
    'prettier/prettier': 0, //disabled
    'no-console': 0, //disabled
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-filename-extension': 0, // disable if necessary
    'react/static-property-placement': 0, // disable if necessary
    'react/jsx-props-no-spreading': 0, // disable if necessary
    'react/require-default-props': 0,
  },
  parser: 'babel-eslint',
};
