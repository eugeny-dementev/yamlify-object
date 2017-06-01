const Lab = require('lab');
const lab = exports.lab = Lab.script();
const { experiment, test } = lab;

const assert = require('assert');

const typeOf = require('../../src/typeOf');

experiment('typeOf', () => {
  test('typeOf null', (done) => {
    assert.equal(typeOf(null), 'null');

    done();
  });

  test('typeOf undefined', (done) => {
    assert.equal(typeOf(undefined), 'undefined');

    done();
  });

  test('typeOf number', (done) => {
    assert.equal(typeOf(4), 'number');

    done();
  });

  test('typeOf object', (done) => {
    assert.equal(typeOf({}), 'object');

    done();
  });

  test('typeOf array', (done) => {
    assert.equal(typeOf([]), 'array');

    done();
  });

  test('typeOf string', (done) => {
    assert.equal(typeOf(''), 'string');

    done();
  });

  test('typeOf boolean', (done) => {
    assert.equal(typeOf(false), 'boolean');

    done();
  });

  test('typeof Symbol()', (done) => {
    assert.equal(typeOf(Symbol('str')), 'symbol');

    done();
  });

  test('typeOf Date', (done) => {
    assert.equal(typeOf(new Date), 'date');

    done();
  });

  test('typeOf new Error', (done) => {
    assert.equal(typeOf(new Error()), 'error');

    done();
  });

  test('typeOf new Object', (done) => {
    assert.equal(typeOf(new Object), 'object');

    done();
 });
});

