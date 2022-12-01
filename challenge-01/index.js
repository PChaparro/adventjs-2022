const wrapping = (gifts) => {
  return gifts.map((gift) => {
    const padding = '*'.repeat(gift.length + 2);
    return `${padding}\n*${gift}*\n${padding}`;
  });
};

module.exports = { wraping };
