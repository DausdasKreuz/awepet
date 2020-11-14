module.exports = {
  'env': {
    'commonjs': true,
    'es6': true,
    'node': true,
  },
  'extends': 'eslint:recommended',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'rules': {
    'indent': [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'quotes': [
      'error',
      'single',
      { 'avoidEscape': true },
    ],
    'semi': [
      'error',
      'never',
    ],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'arrow-parens': [
      'error',
      'as-needed',
    ],
    'no-var': [
      'error',
    ],
    'prefer-const': ['error', {
      'destructuring': 'all',
      'ignoreReadBeforeAssign': true,
    }],
  },
}
