module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    node: true,
    es6: true,
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'class-methods-use-this': 'off',
    'newline-per-chained-call': ["error", { ignoreChainWithDepth: 1 }],
    'indent': ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      MemberExpression: 1,
      ArrayExpression: 1,
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      }
    }],
    '@typescript-eslint/no-extra-semi': 'off',
    'space-before-function-paren': ['error', 'always'],
    'no-use-before-define': ['error', { functions: false }],
    'func-names': 'error',
    curly: ['error', 'all'],
    'arrow-parens': ['error', 'always'],
    'brace-style': ["error", "1tbs"],
    'no-underscore-dangle': 'off',
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
  }
};
