const { default: yo } = require('./src-js/index');
const colors = require('../yamlify-object-colors');
const clico = require('../yamlify-object-colors/node_modules/cli-color');

const arr = {
  array: [
    [],
    ['hello'],
    [235],
  ],
  object: {
    str: 'string',
    num: 532,
    regexp: /hello/,
  },
  error: new Error('hello'),
};

arr.array.push(arr);
arr.array.push(arr.array);
arr.circular = arr;

console.log(yo(arr, {
  indent: '  ',
  prefix: '',
  colors: {
    ...colors,
    base: clico.cyan,
  },
  errorToString (error, prefix = '') {
    console.log('PREFIX:', prefix.length);
    const { stack } = error;

    return stack
      .replace(/(\r\n|\n|\r)\s+/gm, `\n${prefix}`);
  },
}));
