const solve = (a1, a2, a3) => {
  return Array.from(new Set([...a1, ...a2, ...a3])).filter((gift) => {
    // True = 1, so, we filter the gifts that are only contained in of the lists
    return a1.includes(gift) + a2.includes(gift) + a3.includes(gift) === 1;
  });
};

module.exports = { solve };
