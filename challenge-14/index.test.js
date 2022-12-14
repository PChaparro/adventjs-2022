const { solve } = require('./index');

test('Test challenge #14', () => {
  expect(solve([[0], [2, 3]])).toBe(2);
  expect(solve([[0], [3, 4], [9, 8, 1]])).toBe(5);
  expect(solve([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])).toBe(8);
  expect(solve([[0], [7, 4], [2, 4, 6]])).toBe(8);
  expect(solve([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3], [-1, -1, -1, -1, -1]])).toBe(7);
});
