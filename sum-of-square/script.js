// write a function to calculate the sum of squares of all elements in an array.
// ex- given array = [1, 2, 3], the function should return 1*1 + 2*2 + 3*3 = 1+4+9 => 14

const squareSum = (num) => {
  let sum = 0;

  for (let elem of num) {
    sum = sum + elem * elem;
  }
  return sum;
};

console.log(squareSum([1, 2, 3]));
