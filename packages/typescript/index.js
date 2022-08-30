const { resolve } = require('path');

const rules = Object.entries({
  'array-type': 'error',
  'class-literal-property-style': 'error',
  'consistent-indexed-object-style': 'error',
  'consistent-type-imports': 'error',
  'explicit-member-accessibility': 'error',
  'explicit-module-boundary-types': 'error',
  'member-delimiter-style': 'error',
  'no-confusing-non-null-assertion': 'error',
  'no-duplicate-enum-values': 'error',
  'no-extraneous-class': 'error',
  'no-invalid-void-type': 'error',
  'no-require-imports': 'error',
  'no-unnecessary-boolean-literal-compare': 'error',
}).reduce((rules, [key, value]) => ({
  ...rules,
  [`@typescript-eslint/${key}`]: value,
}), {});

module.exports = {
  extends: [
    resolve(__dirname, './index.js'),
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules,
};
