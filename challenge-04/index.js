const solve = (boxes) => {
  return boxes
    .sort((a, b) => {
      return a.l - b.l || a.w - b.w || a.h - b.h;
    })
    .every((box, index) => {
      if (index === 0) {
        return true;
      } else {
        return (
          boxes[index - 1].w < box.w && boxes[index - 1].h < box.h && boxes[index - 1].l < box.l
        );
      }
    });
};

/* 
// My favorite one
// 162 points
const solve = (boxes) => {
  return boxes.filter(
    box => boxes.some(bigger => bigger.w > box.w && bigger.h > box.h && bigger.l > box.l)
  ).length === boxes.length -1;
}
*/

/* 
// 163 POINTS
const solve = (boxes) => {
  return (
    boxes
      .sort((a, b) => {
        // Sort by each property
        return a.l - b.l || a.w - b.w || a.h - b.h;
      })
      .filter((box, index) => {
        if (index === 0) {
          return true;
        } else {
          return (
            boxes[index - 1].w < box.w && boxes[index - 1].l < box.l && boxes[index - 1].h < box.h
          );
        }
      }).length === boxes.length
  );
};
*/

/* 
// 165 POINTS
const solve = (boxes) => {
  return (
    boxes
      .sort((a, b) => {
        // Sort by each property
        return a.l - b.l || a.w - b.w || a.h - b.h;
      })
      .reduce((count, current, index) => {
        if (index === 0) {
          return (count += 1);
        } else {
          return (count +=
            boxes[index - 1].w < current.w &&
            boxes[index - 1].h < current.h &&
            boxes[index - 1].l < current.l);
        }
      }, 0) === boxes.length
  );
};
*/

module.exports = { solve };
