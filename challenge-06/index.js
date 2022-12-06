const solve = (size) => {
  const top = Array.from(
    { length: size },
    (_, index) => ' '.repeat(size - index - 1) + '/\\'.repeat(index + 1) + '_\\'.repeat(size),
  );

  const bottom = Array.from(
    { length: size },
    (_, index) => ' '.repeat(index) + '\\/'.repeat(size - index) + '_/'.repeat(size),
  );

  return [...top, ...bottom].join('\n');
};

module.exports = { solve };
