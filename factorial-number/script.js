/*  
Challenge: Factorial Finder

Write a function factorial that takes a non-negative integer num as input and returns its factorial.
The factorial of a non-negative integer n, denoted as n!, is the product of all positive integers less than or equal to n. The factorial of 0 is defined as 1.

Here are some factorial calculations:

factorial(0) => 1
factorial(1) => 1
factorial(2) => 2
factorial(3) => 6
factorial(4) => 24
factorial(5) => 120

your function should work for any non-negative integer input.
 */

// Approach - 1 => Recursive method

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(4));

// Approach - 2 =>  Iterative method

function newFactorial(n) {
  let ans = 1;

  if (n === 0) return 1;

  for (let i = 2; i <= n; i++) ans = ans * i;
  return ans;
}

console.log(newFactorial(5));
console.log(newFactorial(0));
console.log(newFactorial(4));
