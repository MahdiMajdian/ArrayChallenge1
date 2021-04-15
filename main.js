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
