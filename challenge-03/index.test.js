const { solve } = require('./index');

test('Test challenge 03', () => {
  expect(solve(['book', 'doll', 'ball'], ['dasher', 'dancer'])).toBe(2);
  expect(solve(['a', 'b', 'c'], ['d', 'e'])).toBe(1);
  expect(
    solve(
      ['game', 'videoconsole', 'computer'],
      [
        'midudev',
        'pheralb',
        'codingwithdani',
        'carlosble',
        'blasco',
        'facundocapua',
        'madeval',
        'memxd',
      ],
    ),
  ).toBe(5);
  expect(
    solve(
      ['music'],
      [
        'midudev',
        'pheralb',
        'codingwithdani',
        'carlosble',
        'blasco',
        'facundocapua',
        'madeval',
        'memxd',
      ],
    ),
  ).toBe(26);
});
