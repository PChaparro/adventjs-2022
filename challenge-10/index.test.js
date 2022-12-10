const { solve } = require('./index');

test('Test challenge #', () => {
  expect(solve([1, 2, 1])).toBe(true);
  expect(solve([1, 3, 8, 5, 2])).toBe(true);
  expect(solve([1, 7, 3, 5])).toBe(false);
  expect(solve([1, 2, 3, 2, 1])).toBe(true);
  expect(solve([1, 2, 2, 2, 1])).toBe(true);
  expect(solve([0, 1, 0])).toBe(true);
  expect(solve([2, 2, 2, 2])).toBe(false);
  expect(solve([1, 2, 3])).toBe(false);
  expect(solve([1, 2, 3, 2, 1, 2, 3])).toBe(false);
  expect(solve([1, 1000, 1000, 800])).toBe(true);
  expect(solve([1, 2, 2, 2, 1])).toBe(true);
  expect(solve([1, 1, 1, 1, 1, 1, 1, 1, 2, 1])).toBe(true);
  expect(solve([5, 4, 3, 2, 1])).toBe(false);
});
