const solve = (distance, sleighs) => {
  const filtered = sleighs.filter((sleigh) => sleigh['consumption'] * distance <= 20);
  return filtered.length > 0 ? filtered.at(-1)['name'] : null;
};

module.exports = { solve };
