const { solve } = require('./index');

test('Test challenge #', () => {
  expect(solve([12, 3, 11, 5, 7], 20, 3)).toBe(20);
  expect(solve([50], 15, 1)).toBe(0);
  expect(solve([50], 100, 1)).toBe(50);
  expect(solve([50, 70], 100, 1)).toBe(70);
  expect(solve([50, 70, 30], 100, 2)).toBe(100);
  expect(solve([50, 70, 30], 100, 3)).toBe(100);
  expect(solve([50, 70, 30], 100, 4)).toBe(100);
  expect(solve([50, 10, 40, 1000, 500, 200], 199, 4)).toBe(100);
  expect(solve([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000)).toBe(115);
});
