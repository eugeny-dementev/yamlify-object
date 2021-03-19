import { getConfig } from '../../src/config';
import { dateToString } from '../../src/dateToString';
import { errorToString } from '../../src/errorToString';
import { colors } from '../../src/colors';

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

describe('config', () => {
  test('should return defaultConfig when called without arguments', () => {
    const config = getConfig();

    expect(config).toEqual(defaultConfig);
  });

  ['indent', 'postfix', 'prefix']
    .forEach((field) => {
      test(`should set ${field} to config as is`, () => {
        const config = getConfig({ [field]: mockString });

        expect(config[field]).toBe(mockString);
      });
    });

  Object
    .keys(colors)
    .forEach((type) => {
      test(`should only set color function for passed ${type}`, () => {
        const config = getConfig({
          colors: {
            [type]: mockFunction,
          },
        });

        expect(config.colors).toEqual(Object.assign({}, colors, {
          [type]: mockFunction,
        }));
      });
    });

  ['dateToString', 'errorToString']
    .forEach((option) => {
      test(`should return user ${option} if it passed`, () => {
        const config = getConfig({
          [option]: mockFunction,
        });

        expect(config[option]).toBe(mockFunction);
      });
    });
});

