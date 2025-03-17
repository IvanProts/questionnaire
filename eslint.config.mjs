const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended"
  ),
  {
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'bem': ['warn', { ignoreClassNames: ['^bg-\\[.*\\]$'] }],
      'import/order': [
        'warn',
        {
          groups: [['builtin', 'external'], ['internal', 'parent', 'sibling', 'index']],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
];

export default eslintConfig;
