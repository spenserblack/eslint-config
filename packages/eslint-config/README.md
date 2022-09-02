# ESLint Config

My preferred ESLint config

## Usage

```bash
npm i -D @spenserblack/eslint-config
```

```javascript
// .eslintrc.js
module.exports = {
  root: true,
  extends: "@spenserblack",
};
```

## Note

Rules are split into multiple files. If you do not need all the rules, for example
if your project does not use any TypeScript, you may want to look into the packages
that `@spenserblack/eslint-config` depends on.
