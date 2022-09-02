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
  'prefer-literal-enum-member': 'error',
  'prefer-optional-chain': 'error',
}).reduce((rules, [key, value]) => ({
  ...rules,
  [`@typescript-eslint/${key}`]: value,
}), {});

module.exports = {
  extends: [
    '@spenserblack/eslint-config-base',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules,
};
