/**
 * Write a function that takes an array of numbers as input and return the median value.If the array has an even numbers of elements,
 * return the average of two middle values
 *
 */

function findMedian(num) {
  if (num.length === 0) {
    return 0;
  }

  // sort the array in ascending order

  num.sort((a, b) => a - b);

  const mid = Math.floor(num.length / 2);

  // check if the array has even numbers

  if (num.length % 2 === 0) {
    // return the avg of two middle numbers
    return (num[mid - 1] + num[mid]) / 2;
  } else {
    // return the middle value
    return num[mid];
  }
}

console.log(findMedian([1, 2, 3, 4, 5])); // 3
console.log(findMedian([1, 2, 3, 4, 5, 6])); // 3.5
console.log(findMedian([5, 2, 1, 3, 4])); // 3
console.log(findMedian([5, 2, 1, 3, 4, 6])); // 3.5
console.log(findMedian([])); // 0
