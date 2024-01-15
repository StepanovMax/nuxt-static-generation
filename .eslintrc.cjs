module.exports = {
  // ...
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: ["@nuxtjs/eslint-config-typescript"],
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "vue/valid-v-slot": "off",
    "no-console": "off",
    "no-unused-vars": "off",
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "always",
      },
    ],
    "vue/html-indent": [
      "error",
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "never",
          normal: "always",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
    "vue/require-default-prop": "off",
    "vue/no-v-html": "off",
    "vue/multiline-html-element-content-newline": [
      "error",
      {
        ignoreWhenEmpty: true,
        ignores: ["pre"],
        allowEmptyLines: true,
      },
    ],
    "vue/singleline-html-element-content-newline": [
      "error",
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        externalIgnores: [],
      },
    ],
    "vue/html-closing-bracket-spacing": "off",
    "vue/script-setup-uses-vars": "off",
    "vue/attribute-hyphenation": [
      "error",
      "never",
      {
        ignore: ["viewBox"],
      },
    ],
    "vue/no-template-shadow": "off",
    "object-curly-spacing": ["error", "always"],
  },
};
