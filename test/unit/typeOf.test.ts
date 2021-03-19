import { typeOf } from '../../src/typeOf';

import { cases } from '../cases/types';

describe('typeOf', () => {
  cases.forEach((testCase) => {
    test(`typeOf ${testCase.title || testCase.output}`, () => {
      expect(typeOf(testCase.input)).toBe(testCase.output);
    });
  });
});

