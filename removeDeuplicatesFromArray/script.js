let arr = [1, 2, 1, 3, 4, 2, 2, 1, 5, 6];

// (1) using filter method to remove duplicate value from array

function removeDuplicates(data) {
  return data.filter((value, index) => data.indexOf(value) === index);
}

//console.log(removeDuplicates(arr));

// using filter method to retrieve the duplicate values from array

function getDuplicateValue(data) {
  return data.filter((value, index) => data.indexOf(value) !== index);
}

//console.log(getDuplicateValue(arr));

// (2) using sets / set method

function removedota(data) {
  return [...new Set(data)];
}

// console.log(removedota(arr));

// (3) using forEach method

function duplicateData(data) {
  let newArr = [];
  data.forEach((element) => {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  });

  return newArr;
}

// console.log(duplicateData(arr));

// (4) Reduce method

function duplicateData(data) {
  return data.reduce(
    (acc, cumn) => (acc.includes(cumn) ? acc : [...acc, cumn]),
    []
  );
}

// console.log(duplicateData(arr));

// (5) Polyfill using for loop method

Array.prototype.unique = function () {
  var unique = [];
  for (let i = 0; i < this.length; i++) {
    var current = this[i];
    if (unique.indexOf(current) < 0) {
      unique.push(current);
    }
  }

  return unique;
};

//console.log(arr.unique());

// (5) Polyfill using Set method

Array.prototype.newUnique = function () {
  return Array.from(new Set(this));
};

//console.log(arr.newUnique());

// (6) underscore JS

console.log(_.uniq(arr));
