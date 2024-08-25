module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:storybook/recommended',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  rules: {
    'react/prop-types': 'off',
    'max-len': [
      2,
      {
        code: 120,
        ignoreUrls: true,
        ignorePattern: '.*className=".*"',
        ignoreStrings: true,
        ignoreComments: true,
      },
    ],
    'react-hooks/exhaustive-deps': [2],
    'react/no-unknown-property': [2, { ignore: ['tw'] }],
    'react/no-array-index-key': [1],
    'no-param-reassign': [
      2,
      {
        props: true,
        ignorePropertyModificationsForRegex: ['^draft', '^req', '^ctx'],
      },
    ],
    'sort-imports': [2, { ignoreCase: true, ignoreDeclarationSort: true }],
    'import/order': [
      2,
      {
        groups: [
          ['external', 'builtin'],
          'internal',
          ['sibling', 'parent'],
          'index',
        ],
        pathGroups: [
          {
            pattern: '@(react|react-native)',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@src/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal', 'react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
          object: false,
          Function: false,
        },
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'comma-dangle': [2, 'always-multiline'],
  },
};
