const { solve } = require('./index');

test('Test challenge #', () => {
  expect(solve([], [], [])).toEqual([]);
  expect(solve(['a', 'a'], ['a', 'a'], ['a', 'a'])).toEqual([]);
  expect(solve(['a', 'a'], ['b', 'b'], ['c', 'c'])).toEqual(['a', 'b', 'c']);
  expect(solve(['a', 'b'], ['c', 'd'], ['e', 'f'])).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
});
