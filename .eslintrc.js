module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    "vue/setup-compiler-macros": true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2021,
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["default"],
      },
    ],
  },
}
