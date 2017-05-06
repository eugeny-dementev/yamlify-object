const Lab = require('lab');
const lab = exports.lab = Lab.script();
const { experiment, test } = lab;

const assert = require('assert');

const defaultColors = require('../../src/colors');
const defaultDateToString = require('../../src/dateToString');

const configureYamlifyObject = require('../../src/yamlifyObject');

const defaultConfig = {
  prefix: true,
  postfix: true,
  colors: defaultColors,
  dateToString: defaultDateToString,
  indent: ' ',
};

const objectTestCases = require('../cases/object');

experiment('yamlifyObject', () => {
  experiment('defaultConfig', () => {
    const yamlifyObject = configureYamlifyObject(defaultConfig);

    experiment('object', () => {
      objectTestCases.forEach((testCase) => {
        test(testCase.name, (done) => {
          const output = yamlifyObject(testCase.input);

          assert.equal(output, testCase.output);

          done();
        })
      });
    });

    experiment('array', () => {
      test('empty array', (done) => {
        const str = yamlifyObject([]);

        assert.equal(str, '');

        done();
      });

      test('object with emptyArray prop', (done) => {
        const str = yamlifyObject({
          emptyArray: []
        });

        assert.equal(str, '\n emptyArray: []');

        done();
      });

      test('with elems string start with \\n', (done) => {
        const str = yamlifyObject([1]);

        assert.equal(str, '\n - 1');

        done();
      });
    });
  });
});
