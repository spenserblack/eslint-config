module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
    jest: true,
  },
  extends: "eslint:recommended",
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    // Possible Problems
    "array-callback-return": "error",
    "no-constant-binary-expression": "warn",
    "no-constant-condition": ["error", { checkLoops: false }],
    "no-duplicate-imports": ["warn", { includeExports: true }],
    "no-fallthrough": "off",
    "no-self-compare": "error",
    "no-template-curly-in-string": "warn",
    "no-unmodified-loop-condition": "warn",
    "no-unreachable-loop": "warn",
    "no-unused-private-class-members": "warn",
    "require-atomic-updates": "error",

    // Style
    "arrow-body-style": "error",
    camelcase: "error",
    "class-methods-use-this": "warn",
    curly: ["error"],
    "default-case-last": "error",
    "default-param-last": "error",
    "dot-notation": ["error", {
      // NOTE For example, process.env['NODE_ENV'] is valid.
      allowPattern: "^[A-Z_]+$",
    }],
    eqeqeq: ["error", "always", { null: "ignore" }],
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
    "no-alert": "warn",
    "no-array-constructor": "error",
    "no-caller": "error",
    "no-confusing-arrow": "error",
    "no-else-return": ["error", { allowElseIf: false }],
    "no-extend-native": "error",
    "no-floating-decimal": "error",
    "no-implicit-coercion": ["error", { allow: ["!!"] }],
    "no-implied-eval": "error",
    "no-lonely-if": "warn",
    "no-loop-func": "error",
    "no-mixed-operators": "error",
    "no-multi-assign": "error",
    "no-multi-str": "error",
    "no-nested-ternary": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-wrappers": "error",
    "no-param-reassign": ["error", { props: false }],
    "no-return-assign": "error",
    "no-undefined": "error",
    "no-unneeded-ternary": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "one-var": ["error", "never"],
    "operator-assignment": "warn",
    "prefer-const": "error",
    "prefer-destructuring": ["error", { array: false, object: true }],
    "prefer-exponentiation-operator": "error",
    "prefer-numeric-literals": "error",
    "prefer-object-spread": "error",
    "prefer-regex-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "quote-props": ["error", "as-needed"],
    radix: "error",
    "sort-imports": "error",
    "spaced-comment": "error",
    "symbol-description": "error",
    "array-bracket-spacing": "error",
    "arrow-parens": "error",
    "arrow-spacing": "error",
    "block-spacing": "error",
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": "error",
    "comma-style": "error",
    "computed-property-spacing": "error",
    "dot-location": ["error", "property"],
    "eol-last": "error",
    "func-call-spacing": "error",
    "generator-star-spacing": ["error", {
      named: "after",
      anonymous: "after",
      method: "before",
    }],
    "implicit-arrow-linebreak": ["error"],
    indent: ["error", 2],
    "key-spacing": "error",
    "keyword-spacing": "error",
    "linebreak-style": ["error", "unix"],
    "lines-around-comment": ["error", {
      beforeBlockComment: true,
      beforeLineComment: true,
      allowBlockStart: true,
      allowBlockEnd: true,
      allowClassStart: true,
      allowClassEnd: true,
      allowObjectStart: true,
      allowObjectEnd: true,
      allowArrayStart: true,
      allowArrayEnd: true,
    }],
    "lines-between-class-members": "error",
    "max-len": ["error", {
      code: 88,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],
    "multiline-ternary": ["error", "always-multiline"],
    "new-parens": "error",
    "newline-per-chained-call": ["error"],
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": ["error", {
      max: 2,
      maxEOF: 0,
      maxBOF: 0,
    }],
    "no-trailing-spaces": "error",
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": "error",
    "object-curly-newline": ["error", {
      multiline: true,
      minProperties: 3,
      consistent: true,
    }],
    "object-curly-spacing": ["error", "always"],
    "operator-linebreak": ["error", "after"],
    "padded-blocks": ["error", "never"],
    quotes: ["error", "double"],
    "rest-spread-spacing": "error",
    semi: ["error", "always"],
    "semi-spacing": "error",
    "semi-style": "error",
    "space-before-blocks": "error",
    "space-before-function-paren": ["error", {
      anonymous: "never",
      named: "never",
      asyncArrow: "always",
    }],
    "space-in-parens": "error",
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "switch-colon-spacing": "error",
    "template-curly-spacing": "error",
    "template-tag-spacing": "error",
    "unicode-bom": "error",
    "wrap-iife": ["error", "inside"],
    "yield-star-spacing": "error",
  },
};