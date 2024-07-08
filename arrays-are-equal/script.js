/* Write a function arraysAreEqual that takes two arrays arr1 and arr2 as input and returns true if 
 the arrays are equal (i.e. contain the same elements in the same order), and false otherwise
*/

function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every((currentValue, index) => currentValue === arr2[index]);
}

console.log(arraysAreEqual([1, 2, 3], [1, 2, 3]));
console.log(arraysAreEqual([1, 2, 3], [1, 2, 4]));
console.log(arraysAreEqual([], []));

/*
The JavaScript Array every() method is an iteration method that tests whether every element in a collection satisfies a given condition passed via a callback function.
 It is used to verify if all items in an array fulfill some requirement, typically expressed in the form of a complex set of conditions.
 */

/* Description:-

  The every() method executes a function for each array element.

The every() method returns true if the function returns true for all elements.

The every() method returns false if the function returns false for one element.

The every() method does not execute the function for empty elements.

The every() method does not change the original array
 */
