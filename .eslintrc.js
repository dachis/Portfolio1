module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'google',
    'prettier',
  ],
  rules: {
    'require-jsdoc': ['off'],
    '@next/next/no-img-element': ['off'],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
  },
  overrides: [
    {
      files: ["next-env.d.ts"],
      rules: {
        "spaced-comment": "off",
      },
    },
    {
      files: ["withTwin.js", "next.config.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off"
      }
    }
  ],
}