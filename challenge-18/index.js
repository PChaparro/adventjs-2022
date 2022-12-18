const solve = (dry, numbers) => {
  return new Array(numbers)
    .fill()
    .map((_, index) => index + 1)
    .filter((_, index) => `${index + 1}`.includes(`${dry}`));
};

module.exports = { solve };
