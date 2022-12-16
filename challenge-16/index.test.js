const { solve } = require('./index');

test('Test challenge #16', () => {
  expect(
    solve(
      ` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `,
    ),
  ).toBe(
    'Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.',
  );

  expect(
    solve(
      "  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?",
    ),
  ).toBe(
    "Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?",
  );

  expect(solve('  hi    santa    claus ')).toBe('Hi Santa Claus.');

  expect(solve('  hi    santa    claus . santa claus is the best  ')).toBe(
    'Hi Santa Claus. Santa Claus is the best.',
  );

  expect(
    solve('"Hey santa Claus .  I want a bike.   I want a videogame! "'),
  ).toBe('"Hey Santa Claus. I want a bike. I want a videogame!"');
});
