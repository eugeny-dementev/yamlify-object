import { getPrefix } from '../../src/getPrefix';

const INDENTATIONS = ['\t', ' ', '  ', '#'];
const DEFAULT_INDENT_CHARS = '  ';

describe('getPrefix', () => {
  INDENTATIONS
    .forEach((indentChars) => {
      test(`default prefix is ${JSON.stringify(indentChars)}.`, () => {
        const prefix = getPrefix(undefined, indentChars);

        expect(prefix).toBe(indentChars);
      });

      test('indentCount = 2', () => {
        const prefix = getPrefix(2, indentChars);

        expect(prefix).toBe(`${indentChars}${indentChars}`);
      });
    });

  test('default', () => {
    const prefix = getPrefix();

    expect(prefix).toBe(DEFAULT_INDENT_CHARS);
  });
});
