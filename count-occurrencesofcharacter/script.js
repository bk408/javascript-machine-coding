/*
  Problem: Count occurrences of character

Task:- Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified
       character appears in the string.
 
 To-do constraints:- 
 - The function should be case-sensitive => Either lowerCase or UpperCase
 - The function should handle both lowercase and uppercase characters
 - The character parameter can be any printable ASCII character ( The function should accept any character that is part of the ASCII character set and is printable. )
 */

// Approach - 1  => using for loop method
function countChar(str, char) {
  str = str.toLowerCase();
  char = char.toLowerCase();

  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }

  return count;
}

console.log(countChar("Annad paye meri maaye Satguru main paya", "a"));

// Approach -2 => using reduce method

function charCount(str, char) {
  str = str.toUpperCase();
  char = char.toUpperCase();

  totalCount = str.split("").reduce((acc, cum) => {
    if (cum === char) {
      acc++;
    }
    return acc;
  }, 0);
  return totalCount;
}

console.log(charCount("Annad paye meri maaye Satguru main paya", "a"));
