const solve = (size) => {
  const top = Array.from(
    { length: size },
    (_, index) => ' '.repeat(size - index - 1) + '/\\'.repeat(index + 1) + '_\\'.repeat(size),
  );

  const bottom = Array.from(
    { length: size },
    (_, index) => ' '.repeat(index) + '\\/'.repeat(size - index) + '_/'.repeat(size),
  );

  return [...top, ...bottom].join('\n');
};

/* 
// 100 score
const solve = (size) = >{
  const box = new Array(size * 2);

  for (let index = 0; index < size; index++) {
    const bottom = size * 2 - index - 1;
    box[index] = ' '.repeat(size - index - 1) + '/\\'.repeat(index + 1) + '_\\'.repeat(size);
    box[bottom] = ' '.repeat(size - index - 1) + '\\/'.repeat(index + 1) + '_/'.repeat(size);
  }

  return box.join('\n');
}
*/

/* 
//160 score
const solve = (size) => {
  const top = [];
  const bottom = [];

  for (let index = 0; index < size; index++) {
    top.push(' '.repeat(size - index - 1) + '/\\'.repeat(index + 1) + '_\\'.repeat(size));
    bottom.push(' '.repeat(index) + '\\/'.repeat(size - index) + '_/'.repeat(size));
  }

  return [...top, ...bottom].join('\n');
}
*/

module.exports = { solve };
