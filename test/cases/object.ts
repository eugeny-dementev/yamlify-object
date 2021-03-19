const ERROR = new Error('hello world');
const SYMBOL = Symbol('HELLO WORLD');
const DATE = new Date(0)

export const cases = [
  {
    name: 'null',
    input: null,
    output: '',
  },
  {
    name: 'empty object',
    input: {},
    output: '',
  },
  {
    name: 'object with one property',
    input: { prop: 'value' },
    output: '\n prop: value',
  },
  {
    name: 'property with empty object',
    input: { emptyObject: {} },
    output: '\n emptyObject: {}',
  },
  {
    name: 'property with empty array',
    input: { emptyArray: [] },
    output: '\n emptyArray: []',
  },
  {
    name: 'property with number',
    input: { number: 638 },
    output: '\n number: 638',
  },
  {
    name: 'property with string',
    input: { string: 'hello world'},
    output: '\n string: hello world',
  },
  {
    name: 'property with symbol',
    input: { symbol: SYMBOL },
    output: `\n symbol: ${SYMBOL.toString()}`,
  },
  {
    name: 'property with Date instance',
    input: { date: DATE },
    output: `\n date: new Date(${DATE.toISOString()})`,
  },
  {
    name: 'property with Error instance',
    input: { error: ERROR },
    output: `\n error: Error: hello world`,
  },
  {
    name: 'property with true boolean',
    input: { bool: true },
    output: '\n bool: true',
  },
  {
    name: 'property with false boolean',
    input: { bool: false },
    output: '\n bool: false',
  },
  {
    name: 'property with null',
    input: { null: null },
    output: '\n null: null',
  },
  {
    name: 'property with undefined',
    input: { undefined: undefined },
    output: '\n undefined: undefined',
  },
  {
    name: 'object with few properties',
    input: { prop1: null, prop2: false, prop3: undefined },
    output: '\n prop1: null\n prop2: false\n prop3: undefined',
  },
  {
    name: 'object with not empty object',
    input: { object: { prop1: 'value', prop2: 638 } },
    output: '\n object:\n  prop1: value\n  prop2: 638',
  },
  {
    name: 'property with array of mixed type values',
    input: { array: [638, 'hello world', SYMBOL, DATE, true, false, null, undefined] },
    output: `\n array:\n  - 638\n  - hello world\n  - ${SYMBOL.toString()}\n  - new Date(${DATE.toISOString()})\n  - true\n  - false\n  - null\n  - undefined`,
  },
  {
    name: 'property with array of objects with more than one property',
    input: { array: [{ prop1: 'value', prop2: 'value' }] },
    output: '\n array:\n  - prop1: value\n    prop2: value',
  },
  {
    name: 'object with regexp',
    input: { regexp: /hello/ },
    output: '\n regexp: /hello/',
  },
];

const circularObject = {};
circularObject.circular = circularObject;

cases.push({
  name: 'object with circular reference',
  input: circularObject,
  output: '\n circular: [Circular]',
});
