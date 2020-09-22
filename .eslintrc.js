module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true,
    'jest/globals': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 12
  },
  'plugins':[
    'jest'
  ],
  'rules': {
    'no-console': 'off',
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ]
  }
}
