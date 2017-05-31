const Lab = require('lab');
const lab = exports.lab = Lab.script();
const { experiment, test } = lab;

const assert = require('assert');

const defaultColors = require('../../src/colors');
const defaultDateToString = require('../../src/dateToString');

const yamlifyObject = require('../../src/index');

const defaultConfig = {
  prefix: '\n',
  postfix: '',
  colors: defaultColors,
  dateToString: defaultDateToString,
  indent: ' ',
};

const objectTestCases = require('../cases/object');
const arrayTestCases = require('../cases/array');

experiment('yamlifyObject', () => {
  experiment('defaultConfig', () => {
    experiment('object', () => {
      objectTestCases.forEach((testCase) => {
        test(testCase.name, (done) => {
          const output = yamlifyObject(testCase.input, defaultConfig);

          assert.equal(output, testCase.output);

          done();
        })
      });
    });

    experiment('array', () => {
      arrayTestCases.forEach((testCase) => {
        test(testCase.name, (done) => {
          const output = yamlifyObject(testCase.input, defaultConfig);

          assert.equal(output, testCase.output);

          done()
        });
      });
    });
  });
});
