const { solve } = require('./index');

test('Test challenge #15', () => {
  expect(solve('B P R P')).toEqual(['R', 'P B', 'R B B', 'B P R P']);

  expect(solve('B B')).toEqual(['B', 'B B']);

  expect(solve('B B P R P R R')).toEqual([
    'B',
    'R P',
    'B P P',
    'P R B R',
    'P P B B P',
    'B R B B B R',
    'B B P R P R R',
  ]);

  expect(solve('R R P R R')).toEqual(['R', 'R R', 'P B P', 'R B B R', 'R R P R R']);
});
