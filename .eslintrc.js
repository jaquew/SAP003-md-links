module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    firebase: 'readonly',
  },
  plugins: ['jest'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0,
    'prefer-destructuring': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
};



// module.exports = {
//   env: {
//     "browser": true,
//     "es6": true,
//     "jest/globals": true,
//     "node": true,
//   },
//   extends: [
//     "eslint:recommended"
//   ],
//   globals: {
//     Atomics: 'readonly',
//     SharedArrayBuffer: 'readonly',
//   },
//   parserOptions: {
//     ecmaVersion: 2018,
//     sourceType: 'module',
//   },
//   plugins: ['jest'],
//   rules: {
//     'linebreak-style': 0,
//     'prefer-destructuring': 0,
//     'import/extensions': 0,
//     'import/prefer-default-export': 0,
//     'jest/no-disabled-tests': 'warn',
//     'jest/no-focused-tests': 'error',
//     'jest/no-identical-title': 'error',
//     'jest/prefer-to-have-length': 'warn',
//     'jest/valid-expect': 'error',
//   }
// }
