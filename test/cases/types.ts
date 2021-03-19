export const cases = [
  {
    input: null,
    output: 'null',
  },
  {
    input: undefined,
    output: 'undefined',
  },
  {
    input: 4,
    output: 'number',
  },
  {
    input: {},
    output: 'object',
  },
  {
    input: [],
    output: 'array',
  },
  {
    input: 'str',
    output: 'string',
  },
  {
    input: false,
    output: 'boolean',
  },
  {
    input: Symbol('symbol'),
    output: 'symbol',
  },
  {
    input: new Date(),
    output: 'date',
  },
  {
    input: new Error(),
    output: 'error',
  },
  {
    title: 'new Object()',
    input: new Object() ,
    output: 'object',
  },
  {
    input: /hello/,
    output: 'regexp',
  },
];
