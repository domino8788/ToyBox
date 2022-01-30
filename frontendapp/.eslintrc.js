module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['prettier', 'eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    project: './jsconfig.json',
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-empty-function': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
