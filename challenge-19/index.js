const solve = (toys, positions) => {
  return toys
    .map((toy, index) => {
      return { name: toy, index: positions[index] };
    })
    .sort((a, b) => a.index - b.index)
    .map((toy) => toy.name);
};

module.exports = { solve };
