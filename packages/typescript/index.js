const { rules: baseRules } = require("@spenserblack/eslint-config-base"); // eslint-disable-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires

const typescriptRules = Object.entries({
  "array-type": "error",
  "class-literal-property-style": "error",
  "consistent-indexed-object-style": "error",
  "consistent-type-imports": "error",
  "explicit-member-accessibility": "error",
  "explicit-module-boundary-types": "error",
  "member-delimiter-style": "error",
  "no-confusing-non-null-assertion": "error",
  "no-duplicate-enum-values": "error",
  "no-extraneous-class": "error",
  "no-invalid-void-type": "error",
  "no-require-imports": "error",
  "prefer-literal-enum-member": "error",
  "prefer-optional-chain": "error",
  "sort-type-union-intersection-members": "warn",
  "type-annotation-spacing": "error",
}).reduce((rules, [key, value]) => ({
  ...rules,
  [`@typescript-eslint/${key}`]: value,
}), {});

// NOTE If this rule is null, the options from the base rules will be used.
const overrideRules = Object.entries({
  "brace-style": null,
  "comma-dangle": null,
  "comma-spacing": null,
  "default-param-last": null,
  "func-call-spacing": null,

  // NOTE This rule is broken, so some ignoredNodes need to be added
  indent: null,

  "keyword-spacing": null,
  "lines-between-class-members": null,
  "no-array-constructor": null,
  "no-dupe-class-members": "error",
  "no-empty-function": "error",
  "no-extra-semi": "error",
  "no-loop-func": null,
  "no-loss-of-precision": "error",
  "no-unused-expressions": "error",
  "no-unused-vars": "error",
  "object-curly-spacing": null,
  quotes: null,
  semi: null,
  "space-before-blocks": null,
  "space-before-function-paren": null,
  "space-infix-ops": null,
}).reduce((rules, [key, value]) => ({
  ...rules,
  [key]: "off",
  [`@typescript-eslint/${key}`]: value != null ? value : baseRules[key],
}), {});

const rules = {
  ...typescriptRules,
  ...overrideRules,
  "max-len": ["error", {
    ...baseRules["max-len"][1],
    code: 100,
  }],
};

module.exports = {
  extends: [
    "@spenserblack/eslint-config-base",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules,
};
