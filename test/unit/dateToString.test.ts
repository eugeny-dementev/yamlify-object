import { dateToString } from '../../src/dateToString.js';

describe('Date instance formatting', () => {
  test('dateToString default is date.toString', () => {
    const date = new Date();

    const expected = `new Date(${
      date.toISOString()
    })`;

    expect(expected).toBe(dateToString(date));
  });
});

