const { countHours } = require('./index');

test('Test challenge 02', () => {
  // Test #2
  expect(countHours(2023, ['01/06', '04/01', '12/25'])).toBe(4);
  // Test #3
  expect(countHours(2022, ['01/06', '04/01', '12/25'])).toBe(4);
  // Test #4
  expect(
    countHours(1985, ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25']),
  ).toBe(10);
  // Test #5
  expect(countHours(2000, ['01/01'])).toBe(0);
});
