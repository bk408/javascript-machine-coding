// Write a function to check if a character is upperCase or lowerCase

/*
 The input character will be single character
The character can be any printable ASCII character
 */

function checkTheCase(char) {
  if (char.length !== 1) {
    console.log("char length must be 1");
  }

  if (char >= "A" && char <= "Z") {
    return "upperCase";
  } else if (char >= "a" && char <= "z") {
    return "lowerCase";
  } else {
    return "char is neither upperCase nor in lowerCase";
  }
}

console.log(checkTheCase("school"));
console.log(checkTheCase("PARROT"));
console.log(checkTheCase("P"));
console.log(checkTheCase("A"));
console.log(checkTheCase("b"));
