const solve = (leds) => {
  return Math.max(
    // Calc the min distance for each led to become on
    ...leds.map((led, index) => {
      if (led) return 0;

      const first = [...leds.slice(0, index)].lastIndexOf(1);
      const last = leds.length - leds.lastIndexOf(1) + index;

      if (first === -1) return last * 7;

      const min = Math.min(index - first, last);
      return min * 7;
    }),
  );
};

solve([0, 1, 1, 0, 1]);
// solve([0, 0, 1, 0, 0]);

module.exports = { solve };
