const { solve } = require('./index');

test('Test challenge #', () => {
  expect(
    solve(30, [
      { name: 'Gorusuke', consumption: 0.3 },
      { name: 'Madeval', consumption: 0.5 },
      { name: 'Lolivier', consumption: 0.7 },
      { name: 'Hyuuh', consumption: 1 },
    ]),
  ).toBe('Madeval');

  expect(
    solve(1, [
      { name: 'pheralb', consumption: 0.3 },
      { name: 'TMChein', consumption: 0.5 },
    ]),
  ).toBe('TMChein');

  expect(
    solve(10, [
      { name: 'Pedrosillano', consumption: 1 },
      { name: 'SamarJaffal', consumption: 5 },
    ]),
  ).toBe('Pedrosillano');

  expect(
    solve(50, [
      { name: 'Pedrosillano', consumption: 1 },
      { name: 'SamarJaffal', consumption: 2 },
      { name: 'marcospage', consumption: 3 },
    ]),
  ).toBe(null);
});
