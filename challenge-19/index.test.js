const { solve } = require('./index');

test('Test challenge #19', () => {
  expect(solve(['ball', 'doll', 'car', 'puzzle'], [2, 3, 1, 0])).toEqual([
    'puzzle',
    'car',
    'ball',
    'doll',
  ]);

  expect(
    solve(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [3, 1, 0, 2, 4]),
  ).toEqual(['ps4', 'xbox', 'switch', 'pc', 'nintendo']);

  expect(
    solve(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [8, 6, 5, 7, 9]),
  ).toEqual(['ps4', 'xbox', 'switch', 'pc', 'nintendo']);

  expect(
    solve(
      ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l'],
      [1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1111],
    ),
  ).toEqual(['l', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k']);
});
