
/*
Write a function findMax that takes an array of numbers as input and returns the 
maximum number in the array
*/

// Approach - 1 => using sort method
function maxArr(arr) {
  if (arr.length === 0) {
    console.log("array is empty");
  }
  arr.sort((a, b) => b - a);

  return arr[0];
}

console.log(maxArr([1, 5, 3, 9, 2]));
console.log(maxArr([-10, -5, -3, -9, -2]));
console.log(maxArr([5]));

// Approach - 2 => using Math method

function findMax(arr) {
  if (arr.length === 0) {
    console.log("array is empty");
  }
  return Math.max.apply(null, arr);
}

console.log(findMax([1, 5, 3, 9, 2]));
console.log(findMax([-10, -5, -3, -9, -2]));
console.log(findMax([5]));

// Approach - 3 => using reduce method

function findMaxArr(arr) {
  if (arr.length === 0) {
    console.log("Array is empty");
  }

  return arr.reduce((a, b) => {
    return a > b ? a : b;
  });
}

console.log(findMaxArr([1, 5, 3, 9, 2]));
console.log(findMaxArr([-10, -5, -3, -9, -2]));
console.log(findMaxArr([5]));
