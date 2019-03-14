module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],

  parser: 'babel-eslint',

  env: {
    browser: true,
  },

  rules: {
    semi: ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'no-param-reassign': ['error', { props: false }],
    'no-underscore-dangle': ['error', { allow: ['id_', 'options_', 'cache_', 'el_', 'player_'] }],
    indent: 'off',
    'no-unused-vars': ['error', { varsIgnorePattern: 'dom' }],
    'semi-style': 'off',
    'comma-dangle': 'off',
    'object-curly-newline': 'off',
    'newline-after-var': ['error', 'always'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
}
