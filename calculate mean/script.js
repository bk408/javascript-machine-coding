// Write a function that takes an array of numbers as input and return the mean (average) of those numbers

/**
 * Constraints
 *
 * The input array may contain positive and negative values
 * The inout array may be empty. If it is empty then function should returns 0
 */

function calculateMean(arr) {
  if (arr.length === 0) {
    return 0;
  }

  const sum = arr.reduce((acc, currentVal) => currentVal + acc, 0);

  const meanAvg = sum / arr.length;
  return meanAvg;
}

console.log(calculateMean([1, 2, 3, 4, 5]));
console.log(calculateMean([-1, -2, -3, -4, -5]));
