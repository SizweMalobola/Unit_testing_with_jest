const average = (array) => {
  let sum = array.reduce((total, current) => {
    return (total += current);
  }, 0);
  let avr = sum / array.length;
  return Math.fround(avr);
};
const sortedArray = (array) => {
  return array.sort((a, b) => a - b);
};
const analyze = (array) => {
  return {
    average: average(array),
    min: sortedArray(array)[0],
    max: sortedArray(array)[array.length - 1],
    length: array.length,
  };
};
export default analyze;
