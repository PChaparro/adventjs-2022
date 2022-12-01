const { wraping } = require('./index');

test('Test challenge 1', () => {
  // Test #2
  expect(wraping(['book', 'game', 'socks'])).toEqual([
    '******\n*book*\n******',
    '******\n*game*\n******',
    '*******\n*socks*\n*******',
  ]);

  // Test #3
  expect(wraping(['midu'])).toEqual(['******\n*midu*\n******']);

  // Test #4
  expect(wraping(['a'])).toEqual(['***\n*a*\n***']);

  // Test #5
  expect(wraping([])).toEqual([]);
});
