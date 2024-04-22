module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      alias: true,
      typescript: {
        project: ['tsconfig.json', 'package/tsconfig.json'],
      },
      node: {
        project: ['tsconfig.json', 'package/tsconfig.json'],
      },
    },
    'import/internal-regex':
      '(@layouts|@components|modules|@hooks|@providers|@assets|@locales|@state)(/.+)?',
  },
  rules: {
    'import/named': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          'type',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'import/no-unresolved': [
      'error',
      {
        ignore: [
          '^@modules/.+',
          '@providers',
          '@modules',
          '@state',
          '^@assets/.+',
          '@layouts',
          '^@shared/.+',
          '^@components/.+',
          '@components',
          '^@locales/.+',
          '@hooks',
          '@locales',
        ],
      },
    ],
  },
};
