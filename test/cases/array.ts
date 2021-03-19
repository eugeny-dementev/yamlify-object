const ERROR = new Error('hello world');
const SYMBOL = Symbol('HELLO WORLD');
const DATE = new Date(0);

export const cases = [
  {
    name: 'empty array',
    input: [],
    output: '',
  },
  {
    name: 'array with empty object',
    input: [{}],
    output: '\n - {}'
  },
  {
    name: 'array with few empty objects',
    input: [{}, {}],
    output: '\n - {}\n - {}'
  },
  {
    name: 'array with empty array',
    input: [[]],
    output: '\n - []'
  },
  {
    name: 'array with few empty arrays',
    input: [[], []],
    output: '\n - []\n - []'
  },
  {
    name: 'array with object with empty object property',
    input: [{ empty: {} }],
    output: '\n - empty: {}'
  },
  {
    name: 'array with object with empty array property',
    input: [{ empty: [] }],
    output: '\n - empty: []'
  },
  {
    name: 'array with number',
    input: [638],
    output: '\n - 638'
  },
  {
    name: 'array with string',
    input: ['string'],
    output: '\n - string'
  },
  {
    name: 'array with symbol',
    input: [SYMBOL],
    output: `\n - ${SYMBOL.toString()}`
  },
  {
    name: 'array with Date instance',
    input: [DATE],
    output: `\n - new Date(${DATE.toISOString()})`
  },
  {
    name: 'property with Error instance',
    input: [ERROR],
    output: `\n - Error: hello world`,
  },
  {
    name: 'array with true boolean',
    input: [true],
    output: '\n - true'
  },
  {
    name: 'array with false boolean',
    input: [false],
    output: '\n - false'
  },
  {
    name: 'array with null',
    input: [null],
    output: '\n - null'
  },
  {
    name: 'array with undefined',
    input: [undefined],
    output: '\n - undefined',
  },
  {
    name: 'array with few mixed values',
    input: [638, 'hello world', SYMBOL, DATE, true, false, null, undefined],
    output: `\n - 638\n - hello world\n - ${SYMBOL.toString()}\n - new Date(${DATE.toISOString()})\n - true\n - false\n - null\n - undefined`,
  },
  {
    name: 'array with object with single property',
    input: [{ prop: 'value' }],
    output: '\n - prop: value',
  },
  {
    name: 'array with object with few properties',
    input: [{ prop1: 'value', prop2: 'value' }],
    output: '\n - prop1: value\n   prop2: value',
  },
  {
    name: 'array with object with object property',
    input: [{ object: { prop: 'value' } }],
    output: '\n - object:\n    prop: value',
  },
  {
    name: 'array with object with object property with array with value',
    input: [{ o: { p: ['value'] } }],
    output: '\n - o:\n    p:\n     - value',
  },
  {
    name: 'array with object with array with object with object property',
    input: [{ o: { p: [{ o: { p: 'value' } }] } }],
    output: '\n - o:\n    p:\n     - o:\n        p: value',
  },
  {
    name: 'array with regexp',
    input: [ /hello/ ],
    output: '\n - /hello/',
  },
];

const circularArray = [];
circularArray.push(circularArray);

cases.push({
  name: 'array with circular reference',
  input: circularArray,
  output: '\n - [Circular]',
});
