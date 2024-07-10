// write a function to convert a string to camelCase & snake_case


// camelCase
function camelCaseString(str) {
  const words = str.trim().toLowerCase().split(" ");
  return words
    .map((word, index) => {
      if (index === 0) {
        return word;
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    })
    .join("");
}

console.log(camelCaseString("jAi shRi raM"));


// snakeCase

function snakeCase(str) {
    return str.trim().toLowerCase().split(" ").join("_")
}

console.log(snakeCase("jAi shRi raM"));


