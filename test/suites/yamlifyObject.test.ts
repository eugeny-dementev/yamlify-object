import yamlifyObject from '../../src/index';

import { cases as objectTestCases } from '../cases/object';
import { cases as arrayTestCases } from '../cases/array';

describe('yamlifyObject', () => {
  describe('defaultConfig', () => {
    describe('object', () => {
      objectTestCases.forEach((testCase) => {
        test(testCase.name, () => {
          const output = yamlifyObject(testCase.input);

          expect(output).toBe(testCase.output);
        })
      });
    });

    describe('array', () => {
      arrayTestCases.forEach((testCase) => {
        test(testCase.name, () => {
          const output = yamlifyObject(testCase.input);

          expect(output).toBe(testCase.output);
        });
      });
    });
  });
});
