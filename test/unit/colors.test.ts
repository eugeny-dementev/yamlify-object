import { colors } from '../../src/colors.js';

const STR = 'string';

describe('Default colors', () => {
  Object
    .keys(colors)
    .forEach((type) => {
      test(`Should not change ${type} string color`, () => {
       expect(STR).toBe(colors[type](STR));
      });
    });
});

