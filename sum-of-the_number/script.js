// Writes a function that takes a number as input and returns the sum of digits

/*

input number will always be positive
input number can have multiple digits
output should be the sum of all the digits in the input number 
*/

// using reduce method
function sumOfNumber(num) {
  let arr = Array.from(String(num), Number);

  return arr.reduce((acc, currentValue) => (acc += currentValue), 0);
}

console.log(sumOfNumber(1234));
console.log(sumOfNumber(134));
console.log(sumOfNumber(123456));

/*  
The Array. from() method returns an array from any object with a length property. It also converts any iterable object into an array.
 This method enables array operations on such objects and can apply a mapping function during the conversion process.
 */

// using while loop method

function sumOfDigits(num) {
  let sum = 0;

  //condition check
  while (num > 0) {
    // find last digit
    let digit = num % 10; // 4

    // sum of the digit
    sum += digit;

    // Remove the last digit

    num = Math.floor(num / 10);
  }

  return sum;
}

console.log(sumOfDigits(1234));

/* Example of while loop. how this function work
  
   Let's see how it works with the example 1234:

number = 1234, sum = 0
digit = 1234 % 10 = 4, sum = 0 + 4 = 4, number = Math.floor(1234 / 10) = 123
digit = 123 % 10 = 3, sum = 4 + 3 = 7, number = Math.floor(123 / 10) = 12
digit = 12 % 10 = 2, sum = 7 + 2 = 9, number = Math.floor(12 / 10) = 1
digit = 1 % 10 = 1, sum = 9 + 1 = 10, number = Math.floor(1 / 10) = 0
The loop ends because number is now 0, and the function returns sum, which is 10.
 */
