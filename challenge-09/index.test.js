const { solve } = require('./index');

test('Test challenge #9', () => {
  expect(solve([0, 1, 1, 0, 1])).toBe(7);
  expect(solve([0, 0, 0, 1])).toBe(21);
  expect(solve([0, 0, 1, 0, 0])).toBe(28);
  expect(solve([1, 0, 0, 1, 0, 0])).toBe(14);
  expect(solve([1, 1, 0, 0, 0, 0])).toBe(28);
  expect(solve([1, 1, 1])).toBe(0);
});
