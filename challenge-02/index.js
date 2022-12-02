const countHours = (year, holidays) => {
  return holidays.reduce((acc, current) => {
    const date = new Date(current + `/${year}`);
    const hasToCompensate = date.getDay() > 0 && date.getDay() < 6;
    return hasToCompensate ? (acc += 2) : acc;
  }, 0);
};

module.exports = { countHours };
