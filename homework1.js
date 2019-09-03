/* 1.Write a function which receives an array and a number as arguments and returns a new array 
from the elements of the given array which are larger than the given number. 
Input[10, 25, 16, -5, 30, 15, 24],16  Output[25, 30, 24]
Input[1, 1, 2, -3, 0, 8, 4, 0],9       Output“Such values do not exist.” */

var arr = [10, 25, 16, -5, 30, 15, 24];

function myFunc(arr,number) {
  var newArr = [];
  for(var i = 0;i < arr.length;i++) {
    if(arr[i] > number) {
      newArr.push(arr[i]);
    } 
  }
  return newArr.length !== 0 ? newArr : "values do not exist.";
}

console.log(myFunc(arr,16));


/* 2.Write a function, which receives two numbers as arguments and finds all numbers 
between them such that each digit of the number is even. The numbers obtained should 
be printed in a comma-separated sequence on a single line.
Input 19, 42  Output “20, 22, 24, 26, 28, 40, 42”
Input 99, 199 Output “Such numbers does not exist.” */

var numsArr = [];
function myFunc(start,end) {
  for(var i = start;i <= end;i++) {
    var s = "" + i;
    if(s[0] % 2 === 0 && s[1] %2 === 0) {
        numsArr.push(s);
  } 
  }
  console.log(numsArr.join());
}

myFunc(19,42);


/* 3.Write a recursive function to determine whether all digits of the number are odd or not.
Input 4211133  Output false
Input 7791     Output true
Input 5		Output true */  //միայն ցիկլով ստացվեց 

function onlyOddNumsums(n){
  var mnacord = 0;
  while(n >= 1){
    mnacord=n % 10;
    n = (n - mnacord) / 10;
    if(mnacord % 2 === 0) {
      return false;
    }
  }
  return true;
}
console.log(onlyOddNumsums(4211133));


/* 4. Given an array of numbers. Write a recursive function to find its minimal positive element.
 (if such element does not exist, return -1) */
 
/* var arr = [45, -9, 15, 5, -78];
function forSort(a,b) {
  return a - b;
}

arr.sort(forSort);

for(var i = 0;i < arr.length;i++) {
  if(arr[i] >= 0) {
    console.log(arr[i]);
    break;
  }
} */


function recArr1(arr = [],n = Infinity) {
  if(arr.length === 0) {
    return n > 0 && n !== Infinity ? n : -1
  }
  let d  = arr.shift();
  let arg = d < n && d > 0 ? d: n;
  return recArr1(arr,arg);
}

console.log(recArr1([-1,-2,-3,-4,-5,0]));



/* 5. Given an array of numbers which is almost sorted in ascending order.
  Find the index where sorting order is violated. */















