const Lab = require('lab');
const lab = exports.lab = Lab.script();
const { experiment, test } = lab;

const assert = require('assert');

const buildConfig = require('../../src/config');
const dateToString = require('../../src/dateToString');
const errorToString = require('../../src/errorToString');
const colors = require('../../src/colors');

const defaultConfig = {
  indent: ' ',
  prefix: '\n',
  postfix: '',
  dateToString,
  errorToString,
  colors,
};

const mockString = 'hdhdsf';
function mockFunction (value) { return value; }

experiment('config', () => {
  test('should return defaultConfig when called without arguments', (done) => {
    const config = buildConfig();

    assert.deepEqual(config, defaultConfig);

    done();
  });

  ['indent', 'postfix', 'prefix']
    .forEach((field) => {
      test(`should set ${field} to config as is`, (done) => {
        const config = buildConfig({ [field]: mockString });

        assert.equal(config[field], mockString);

        done();
      });
    });

  Object
    .keys(colors)
    .forEach((type) => {
      test(`should only set color function for passed ${type}`, (done) => {
        const config = buildConfig({
          colors: {
            [type]: mockFunction,
          },
        });

        assert.deepEqual(config.colors, Object.assign({}, colors, {
          [type]: mockFunction,
        }));

        done();
      });
    });

  ['dateToString', 'errorToString']
    .forEach((option) => {
      test(`should return user ${option} if it passed`, (done) => {
        const config = buildConfig({
          [option]: mockFunction,
        });

        assert.strictEqual(config[option], mockFunction);

        done();
      });
    });
});

