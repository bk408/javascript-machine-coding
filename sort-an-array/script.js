/*
Problem:- Sort an array

Statement:- Write a function to sort an array of numbers in an ascending order.
To-do Requirements:

1. The function should take an array of numbers as input
2. It should return a new array with the numbers sorted in ascending order.
3. The original array should remain unchanged.
4. You are not allowed to use built-in sort() method.
*/

// Approach-1 => using sort method

function sortAscending(arr) {
  return arr.sort((a, b) => a - b);
}
console.log(sortAscending([5, 3, 1, 8]));
console.log(sortAscending([5, 3, 10, 8]));
console.log(typeof sortAscending[2]);

function shortArray(newArr) {
  return newArr.sort((a, b) => a - b);
}

console.log(shortArray([5, 3, 1, 8]));
console.log(shortArray([5, 3, 10, 8]));
console.log(typeof shortArray[2]);

// Approach - 2 => without using sort property

const sortArr = (arr) => {
  // create a new array to keep the original array unchanged

  const sortedArray = arr.slice();
  const n = sortedArray.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        const temp = sortedArray[j];
        sortedArray[j] = sortedArray[j + 1];
        sortedArray[j + 1] = temp;
      }
    }
  }

  return sortedArray;
};

console.log(sortArr([5, 3, 1, 8]));
console.log(sortArr([5, 3, 10, 8]));
console.log(typeof sortArr[2]);
