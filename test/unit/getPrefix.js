const Lab = require('lab');
const lab = exports.lab = Lab.script();
const { experiment, test } = lab;

const assert = require('assert');

const getPrefix = require('../../src/getPrefix');

const INDENTATIONS = ['\t', ' ', '  ', '#'];

experiment('getPrefix', () => {
  INDENTATIONS
    .forEach((indentChars) => {
      test(`default prefix is ${JSON.stringify(indentChars)}.`, (done) => {
        const prefix = getPrefix(undefined, indentChars);

        assert.equal(prefix, indentChars);

        done();
      });

      test('indentCount = 2', (done) => {
        const prefix = getPrefix(2, indentChars);

        assert.equal(prefix, `${indentChars}${indentChars}`);

        done();
      });
    });
});
