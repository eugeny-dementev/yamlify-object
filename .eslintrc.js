module.exports = {
  extends: [
    'airbnb-base',
  ],
  env: {
    node: true,
    es6: true,
  },
  rules: {
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
