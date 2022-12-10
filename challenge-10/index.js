const solve = (heights) => {
  const inflection = heights.indexOf(Math.max(...heights));
  const left = heights.slice(0, inflection + 1);
  const right = heights.slice(inflection + 1);

  return (
    // More than one item increasing and at least one item
    // decreasing
    !(left.length <= 1 || !right.length) &&
    // Every item on the left part is increasing
    left.every((number, index, arr) => {
      return !arr[index - 1] || number >= arr[index - 1];
    }) &&
    // Every item on the right part is decreasing
    right.every((number, index, arr) => {
      return !arr[index - 1] || number <= arr[index - 1];
    })
  );
};

module.exports = { solve };
