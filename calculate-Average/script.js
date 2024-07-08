// Calculate the average


// using for loop
function calculateAvg(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum / arr.length
}


// using reduce method

console.log(calculateAvg([5, 10, 2, 8]));


const getAverage = (arra) => {
   return arra.reduce((sum, currentValue) => sum + currentValue) / arra.length
}

console.log(getAverage([5, 10, 2, 8]));