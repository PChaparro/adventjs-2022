const { solve } = require('./index');

test('Test challenge #18', () => {
  expect(solve(1, 15)).toEqual([1, 10, 11, 12, 13, 14, 15]);

  expect(solve(2, 20)).toEqual([2, 12, 20]);

  expect(solve(3, 33)).toEqual([3, 13, 23, 30, 31, 32, 33]);

  expect(solve(4, 45)).toEqual([4, 14, 24, 34, 40, 41, 42, 43, 44, 45]);

  expect(solve(5, 55)).toEqual([
    5, 15, 25, 35, 45, 50, 51, 52, 53, 54, 55,
  ]);

  expect(solve(9, 8)).toEqual([]);
});
