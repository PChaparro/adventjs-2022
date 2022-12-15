const solve = (base) => {
  const HEIGHT = base.split(' ').length;

  // Create an empty array and add the base
  const arr = new Array(HEIGHT).fill([]);
  arr[HEIGHT - 1] = [...base.split(' ')];

  for (let index = HEIGHT - 1; index >= 0; index--) {
    const previousLevel = arr[index + 1];

    arr[index] = previousLevel
      // Remove the first element, so we can easily compare the pairs
      .slice(1)
      .map((pair, position, slicedPreviousLevel) => {
        // Take each letter pair
        const firstCharCode = previousLevel[position].charCodeAt(0);
        const secondCharCode = slicedPreviousLevel[position].charCodeAt(0);

        return firstCharCode === secondCharCode
          ? pair
          : // 228 is the sum of the charCodes of B P and R letters,
            // so, we take the missing charCode and transform to string
            String.fromCharCode(228 - firstCharCode - secondCharCode);
      });
  }

  // convert the arrays to flatten strings
  return arr.map((level) => level.join(' '));
};

solve('B P R P');

module.exports = {
  solve,
};
