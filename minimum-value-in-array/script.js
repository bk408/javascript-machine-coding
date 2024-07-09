// Write a function that takes an array of numbers as input and returns the minimum value found in array

/*  Constraints:
  1. The input array may contain both positive and negative integers
  2. The input array may be empty
  3. The input array may contain duplicate values
 */

// using Math
function minimumValue(arr) {
  return Math.min.apply(null, arr);
}

console.log(minimumValue([5, 10, 2, 8]));
console.log(minimumValue([5, -3, 0, 12, -7]));
console.log(minimumValue([]));

// using reduce

function findMin(arr) {
  return arr.reduce((a, b) => {
    return a < b ? a : b;
  });
}

console.log(findMin([5, 10, 2, 8]));
console.log(findMin([5, -3, 0, 12, -7]));
console.log(findMin([2]));

// using sort method
function minVal(arr) {
  arr.sort((a, b) => a - b);
  return arr[0];
}

console.log(minVal([5, 10, 2, 8]));
console.log(minVal([5, -3, 0, 12, -7]));
console.log(minVal([]));
