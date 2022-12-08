const solve = (part) => {
  return [...part].some((_, index) => {
    const filtered = part.substring(0, index) + part.substring(index + 1);
    return filtered === [...filtered].reverse().join('');
  });
};

// Alternative solutions
/*
const solve = (part) => {
  // This line is supposed to avoid unneeded operations but reach 160 points
  // if (arr.reverse().join('') === part) return true;

  return (
    arr.reduce((acc, _, outerIndex) => {
      // This alternative reach 120 points
      // const filtered = [...arr.slice(0, outerIndex), ...arr.slice(outerIndex + 1)] ;
      const filtered = arr.filter((_, innerIndex) => innerIndex != outerIndex);

      // This return reach 160 points
      // const isPalindrome = filtered.join('') === filtered.reverse().join('');
      // return acc += isPalindrome;

      // One line return reach 200 points 🤔
      return (acc += filtered.join('') === filtered.reverse().join(''));
    }, 0) >= 1
  );
};
*/

module.exports = { solve };
