module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "@typescript-eslint", "react-hooks"],
  rules: {
    "prettier/prettier": ["warn"],

    "no-unused-vars": 0,
    "no-restricted-globals": ["error"],

    "react/prop-types": 0,
    "react/display-name": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/ban-ts-ignore": 0,
  },
};
