const solve = (dry, numbers) => {
  return new Array(numbers)
    .fill()
    .map((_, index) => index + 1)
    .filter((val) => `${val}`.includes(`${dry}`));
};

module.exports = { solve };
