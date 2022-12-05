const solve = (giftsCities, maxGifts, maxCities) => {
  const POSSIBLE_COMBINTAIONS = 2 ** giftsCities.length;

  // Documentation: https://algotree.org/algorithms/numeric/subsets_bitwise/
  // Original solution to find the combination: https://github.com/mamunoz-dev/adventjs-2022/blob/main/day5.md

  const validCombinations = new Array(POSSIBLE_COMBINTAIONS)
    .fill() // Creates an empty arrray
    // Create each possible combination
    .map((_, finalArrayIndex) => {
      return giftsCities.filter((_, originalArrayIndex) => {
        // For each index, validate if it's covered by the mask (Read the documentation)
        const MASK = 2 ** originalArrayIndex;
        // If the condition is true, we return the element wich is in the
        // original array at the current index originalArrayIndex.
        return finalArrayIndex & MASK;
      });
    })
    // Remove combinations that exceed the cities limit
    .filter((combination) => combination.length <= maxCities)
    // Get the sum of each combination
    .map((combination) => combination.reduce((acc, curr) => acc + curr, 0))
    // Remove combinations that exceed the gifts limit
    .filter((sum) => sum <= maxGifts)
    .sort((a, b) => a - b);

  return validCombinations[validCombinations.length - 1];
};

module.exports = { solve };
