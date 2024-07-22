// Write a function to reverse a string without using any built-in method or library. Function should take string in inout and return the reverse string as output



// using reverse but-in method
function reverseStr(str) {
   return str.split("").reverse().join("")
    
}

console.log(reverseStr("Hello World"));


// using for loop

function strReverse(str) {
    let newString = "";

    for (let i = str.length - 1; i >= 0; i--){
        newString += str[i]
    }
    return newString;
}

console.log(strReverse("Hello Bhavya"));