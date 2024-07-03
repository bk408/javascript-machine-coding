function checkPalidrome(str) {
      str = str.toLowerCase().replace(/\W/g, "");
    let reverseString = str.split("").reverse().join("")
    //console.log(reverseString);
    return str === reverseString ? true : false
}

console.log(checkPalidrome("A man, a plan, a canal, Panama"));  
console.log(checkPalidrome("racecar"));
console.log(checkPalidrome("Hello"));