const { wrapping } = require('./index');

test('Test challenge 1', () => {
  // Test #2
  expect(wrapping(['book', 'game', 'socks'])).toEqual([
    '******\n*book*\n******',
    '******\n*game*\n******',
    '*******\n*socks*\n*******',
  ]);

  // Test #3
  expect(wrapping(['midu'])).toEqual(['******\n*midu*\n******']);

  // Test #4
  expect(wrapping(['a'])).toEqual(['***\n*a*\n***']);

  // Test #5
  expect(wrapping([])).toEqual([]);
});
