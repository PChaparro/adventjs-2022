const solve = (path) => {
  const MAXDEEPT = path.length - 1;
  let min = Number.MAX_SAFE_INTEGER;

  const traverseTree = (acc, currentHeight, currentIndex) => {
    acc += path[currentHeight][currentIndex];

    if (currentHeight < MAXDEEPT) {
      // Go left
      traverseTree(acc, currentHeight + 1, currentIndex);
      // Go right
      traverseTree(acc, currentHeight + 1, currentIndex + 1);
    } else {
      // Save the sum of the path when some leaf is reached
      min = Math.min(min, acc);
    }
  };

  traverseTree(0, 0, 0);
  return min;
};

// solve([[0], [3, 4], [9, 8, 1]]);
solve([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3], [-1, -1, -1, -1, -1]]);

module.exports = { solve };
