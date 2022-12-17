const { solve } = require('./index');

test('Test challenge #', () => {
  expect(solve(['game', 'bike', 'book', 'toy'], 10)).toEqual([
    'game bike',
    'book toy',
  ]);

  expect(solve(['game', 'bike', 'book', 'toy'], 7)).toEqual([
    'game',
    'bike',
    'book toy',
  ]);

  expect(solve(['game', 'bike', 'book', 'toy'], 4)).toEqual([
    'game',
    'bike',
    'book',
    'toy',
  ]);

  expect(solve(['toy', 'gamme', 'toy', 'bike'], 6)).toEqual([
    'toy',
    'gamme',
    'toy',
    'bike',
  ]);

  expect(solve(['toy', 'toy', 'toy', 'toy'], 2)).toEqual([]);

  expect(solve(['toy', 'toy', 'disk', 'disk', 'toy', 'toy'], 7)).toEqual([
    'toy toy',
    'disk',
    'disk toy',
    'toy',
  ]);
});
