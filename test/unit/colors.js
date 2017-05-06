const Lab = require('lab');
const lab = exports.lab = Lab.script();
const { experiment, test } = lab;

const assert = require('assert');

const colors = require('../../src/colors');

const STR = 'string';

experiment('Default colors', () => {
  Object
    .keys(colors)
    .forEach((type) => {
      test(`Should not change ${type} string color`, (done) => {
        assert.strictEqual(STR, colors[type](STR));

        done();
      });
    });
});
