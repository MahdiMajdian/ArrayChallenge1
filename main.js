console.log("Hello World")

// 1- A function to delete an item by index

function deleteByIndex(arr , index) { 
arr.splice(index , 1)
return arr
}

arr = ['a' , 'b' , 'c' , 'd']
console.log(deleteByIndex(arr , 1))