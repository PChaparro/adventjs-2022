const solve = (packOfGifts, reindeers) => {
  const reindeersCapacity = reindeers.reduce((acc, curr) => acc + curr.length * 2, 0);
  const giftsWeight = packOfGifts.reduce((acc, curr) => acc + curr.length, 0);
  return Math.floor(reindeersCapacity / giftsWeight);
};

module.exports = { solve };
