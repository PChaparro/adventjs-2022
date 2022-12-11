const { solve } = require('./index');

test('Test challenge #', () => {
  expect(solve('01:00:00', '03:00:00')).toBe('1/3');
  expect(solve('02:00:00', '04:00:00')).toBe('1/2');
  expect(solve('01:00:00', '01:00:00')).toBe('1/1');
  expect(solve('00:10:00', '01:00:00')).toBe('1/6');
  expect(solve('01:10:10', '03:30:30')).toBe('1/3');
  expect(solve('02:20:20', '03:30:30')).toBe('2/3');
  expect(solve('03:30:30', '05:50:50')).toBe('3/5');
});
