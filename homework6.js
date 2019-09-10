/* 1. Given a sorted array and an element from that array.
Find the index of that element using binary search. */
let myArr = [2, 5, 7, 8, 14, 19, 25, 28, 45, 51, 62, 72, 76, 96];

function binarySearch(arr,number) {
  let first = 0;
  let last = arr.length-1;
  let mid = 0;
  
  while(first <= last) {
    mid = Math.floor((first + last) / 2);
    if(arr[mid] === number) {
      return `Index of ${number} : ${mid}`;
    }if(arr[mid] > number) {
      last =  mid - 1;
    }if(arr[mid] < number) {
      first =  mid + 1;
    }
  }
  return `there is no such number(${number})in the array! \n ${arr}`;
}


console.log(binarySearch(myArr,9));



/* 2. Write a JavaScript recursive function to get all possible subsets of length n of the given array.
 Assume that all elements in the array are unique.
Input	                 Output
[4],2                    [4]
[19, 6],2	             [19, 6]
[5, 9, 23, 0, -2, -1],3	[[5, 9, 23], [5, 9, 0], [5, 9, -2], [5, 9, -1], [5, 23, 0], 
                        [5, 23, -2], [5, 23, -1], [5, 0, -2], [5, 0, -1], [5, -2, -1],
						[9, 23, 0], [9, 23, -2], [9, 23, -1], [9, 0, -2], [9, 0, -1], 
						[9, -2, -1], [23, 0, -2], [23, 0, -1], [23, -2, -1], [0, -2, -1]] */
let myArr = [5, 9, 23, 0, -2, -1]; // sovorakan function-ov: recursiayov chstacvec mots.

function myFunc(arr,n) {
  if(arr.length <= n) return arr; 
  let result = [];
  result.push([]);
  arr.forEach(function(item) {
   let length = result.length;
    for(let i = 0;i < length;i++) {
      let newArr = result[i].slice(0);
      newArr.push(item);
      result.push(newArr);
    }
  })
  return result.filter(elem => elem.length === n);
}

console.log(myFunc(myArr,3));



