const solve = (gifts, maxWeight) => {
  const bags = [];

  gifts.forEach((gift) => {
    if (gift.length > maxWeight) return;

    const fitsOnCurrentBag =
      bags.at(-1) &&
      bags.at(-1).replaceAll(' ', '').length + gift.length <= maxWeight;

    fitsOnCurrentBag
      ? (bags[bags.length - 1] += ` ${gift}`)
      : bags.push(gift);
  });

  return bags;
};

module.exports = { solve };
