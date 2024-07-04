/* Q. Write a function Find the longest word that takes a string as input and returns the longest word in the string. 
If there are multiple longest words, return the first one encountered 


Constraints:- 
1. The input string may contain alphabetic characters, digits, spaces and punctuation.
2. The input string is non-empty
3. The input string may contain multiple words separated by spaces.

Note:- 
1. The function should return false if the input string is empty or contains only whitespace.
2. The function should ignore leading and trailing whitespace when determining the longest word.

*/

function findLongestWord(str) {
  // remove extra white space
  if (str.trim().length === 0) {
    return false;
  }

  words = str.split(" ");
  words.sort((a, b) => b.length - a.length);
  return words[0];
  console.log(words);
}

console.log(
  findLongestWord(
    "Annand paya meri maye, satguru main paya satgurudata paya sehaj seti mann vich aa vadhaiyan"
  )
);

/*

If we use b.length - a.length then it means we are sorting the array in descending order. It means the longest word come first then
the shortest word will come last.

If we use opposite method like a.length - b.length then it means we are sorting the array in ascending order. It means the shortest word 
come first then the longest word will come last.


*/
