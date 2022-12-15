const solve = (base) => {
  const arr = [[...base.split(' ')]];

  arr[0].slice(1).forEach((_, index) => {
    const row = [...arr[index]].slice(1).map((pair, innerIndex) => {
      const firstCharCode = arr[index][innerIndex].charCodeAt(0);
      const secondCharCode = pair.charCodeAt(0);

      return pair === arr[index][innerIndex]
        ? pair
        : // 228 is the sum of the charCodes of B P and R letters,
          // so, we take the missing charCode and transform to string
          String.fromCharCode(228 - firstCharCode - secondCharCode);
    });

    arr.push(row);
  });

  return arr.map((row) => row.join(' ')).reverse();
};

module.exports = {
  solve,
};
