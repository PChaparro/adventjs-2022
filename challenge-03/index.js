const solve = (packOfGifts, reindeers) => {
  const reindeersCapacity = reindeers.reduce((acc, curr) => acc + curr.length * 2, 0);
  const giftsWeight = packOfGifts.reduce((acc, curr) => acc + curr.length, 0);
  return Math.floor(reindeersCapacity / giftsWeight);
};

/* This solution reach the same score
const solve = (packOfGifts, reindeers) => {
  const max = Math.max(packOfGifts.length, reindeers.length);
  let reindeersCapacity = 0;
  let giftsWeight = 0;

  for(let i=0; i<max; i++){
    if(packOfGifts.length > i){
      giftsWeight += packOfGifts[i].length;
    }

    if(reindeers.length > i){
      reindeersCapacity += reindeers[i].length * 2;
    }
  }

  return Math.floor(reindeersCapacity / giftsWeight); 

};
 */

module.exports = { solve };
