const solve = (lastBackup, changes) => {
  return [
    ...new Set(changes.filter((change) => change[1] > lastBackup).map((change) => change[0])),
  ].sort((a, b) => a - b);
};

module.exports = { solve };
