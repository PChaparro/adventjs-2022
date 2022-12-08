const { solve } = require('./index');

test('Test challenge #', () => {
  expect(solve('uwu')).toBe(true);
  expect(solve('miidim')).toBe(true);
  expect(solve('midu')).toBe(false);
  expect(solve('lolol')).toBe(true);
  expect(solve('yolooloy')).toBe(true);
  expect(solve('zzzoonzzz')).toBe(true);
});
