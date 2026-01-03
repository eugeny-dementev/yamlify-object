import { typeOf } from '../../src/typeOf.js';

import { cases } from '../cases/types.js';

describe('typeOf', () => {
  cases.forEach((testCase) => {
    test(`typeOf ${testCase.title || testCase.output}`, () => {
      expect(typeOf(testCase.input)).toBe(testCase.output);
    });
  });
});


