import yamlifyObject from '../../src/index.js';

import { cases as objectTestCases } from '../cases/object.js';
import { cases as arrayTestCases } from '../cases/array.js';

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

