// Write a function to check if a given string starts with a specific substring

/**
 Write a string (e.g."Hello world")
 subSting: A substring to check if it starts the given string ("Hello")
 output: true if the given string starts with the specified substring otherwise false
 */

// 	startsWith() =>  Returns true if the string starts with the value. Otherwise it returns false.

// using startsWith() method
function strCheck(str, subSting) {
  return str.startsWith(subSting);
}

console.log(strCheck("Hello world", "Hello"));
console.log(strCheck("How are you, Bhavya", "Hello"));

// using slice method
function checkStr(str, substring) {
  return str.slice(0, substring.length) === substring;
}

console.log(checkStr("Hello world", "Hello"));
console.log(checkStr("How are you, Bhavya", "Hello"));

// using indexOf method  => It returns the position of first occurrence of a value in a string. it returns -1 if the value is not found.

function anotherStrCheck(str, subSting) {
  return str.indexOf(subSting) === 0;
}

console.log(anotherStrCheck("Hello world", "Hello"));
console.log(anotherStrCheck("How are you, Bhavya", "Hello"));
