const { solve } = require('./index');

test('Test challenge #', () => {
  expect(
    solve([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
    ]),
  ).toBe(true);

  expect(
    solve([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 3, w: 1, h: 3 },
    ]),
  ).toBe(false);

  expect(
    solve([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 2, w: 10, h: 2 },
    ]),
  ).toBe(false);

  expect(
    solve([
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 },
    ]),
  ).toBe(true);
});
