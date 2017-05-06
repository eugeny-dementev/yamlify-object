const Lab = require('lab');
const lab = exports.lab = Lab.script();
const { experiment, test } = lab;

const assert = require('assert');

const dateToString = require('../../src/dateToString');

experiment('Date instance formatting', () => {
  test('dateToString default is date.toString', (done) => {
    const date = new Date();

    const expected = `new Date(${
      date.toISOString()
    })`;

    assert.strictEqual(expected, dateToString(date));

    done();
  });
});
