// @Todo [LWS-39] get eslint working for res-sails
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // Documentation: https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'jest',
    'import',
    'unused-imports',
  ],
  env: {
    jest: true,
    node: true,
  },
  globals: {
    'jest/globals': true,
  },
  rules: {
    'eol-last': [1, 'always',],
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [
      // https://eslint.org/docs/rules/no-unused-vars#options
      'warn',
      {
        vars: 'local',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    'comma-dangle': [
      'warn',
      {
        arrays: 'always',
        objects: 'always',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      },
    ],
    semi: ['warn', 'never',],
    quotes: ['warn', 'single',],
    'no-trailing-spaces': 'warn',
    'max-len': [
      // https://eslint.org/docs/rules/max-len#options
      'warn',
      {
        code: 92,
        tabWidth: 2,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'arrow-parens': [
      'warn',
      'as-needed',
      {
        requireForBlockBody: false,
      },
    ],
    'space-in-parens': ['warn', 'never',],
    'object-curly-spacing': [
      'warn',
      'always',
      {
        objectsInObjects: true,
      },
    ],
    quotes: ['warn', 'single',],
  },
}
