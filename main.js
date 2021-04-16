// 1- A function to delete an item by index

function deleteByIndex(arr, index) {
  arr.splice(index, 1);
  return arr;
}

arr = ["a", "b", "c", "d"];
console.log(deleteByIndex(arr, 1));

// 2- A function to combine two or more arrays] and sort the final array
function combine(...arg) {
  let result = [];
  for (let item of arg) {
    result = result.concat(item);
  }
  result.sort((a, b) => a - b);
  return result;
}

console.log(combine([3, 1, 2], [5, 6, 4], [7, 8, 9]));

// 3- Remove duplicate items of an Array
function duplicateRemover(array) {
  let result = [];
  for (let item of array) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}

console.log(duplicateRemover([1, 1, 4, 5, 3, 5, 3, 9]));

// 4- A function to extract numbers from a string

function extract(string) {
  let str = string.split("");
  let numbers = str.filter(function isNumeric(item) {
    return !isNaN(parseFloat(item)) && isFinite(item);
  });
  return numbers;
}
console.log(extract("i have 2 apples and 3 pineapples"));

//5- Flat an Array of arrays

let array = [[2, 3], 5, [[[2, 9], 4], 4], 1, 0];
array.flat(Infinity);
alert(array);
