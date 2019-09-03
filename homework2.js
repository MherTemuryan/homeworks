/* 1.Given an array.Write a recursive function that removes the first element and returns the given array.
(without using arr.unshift(),assign second element to first, third element to second...)
Input	           |    Output
[6,78,‘n’,0,1]     |   [78, ‘n’, 0, 1]
[5]                |   []
[]	               |   []
 */
var arr = [-5,3,7,-2,14];
var newArr = [];
var i = 0;
function delFirstElem(arr) {
  if(i < arr.length-1) {
    newArr[i] = arr[i+1];
    i++;
    return delFirstElem(arr);
  }
  return newArr;
}

console.log(delFirstElem(arr));


/* 2.Given an array of nested arrays. Write a recursive function that flattens it.
(Hint create function that concats arrays).
Input	                    |   Output
[1, [3, 4, [1, 2]], 10]	    |   [1, 3, 4, 1, 2, 10]
[14, [1, [[[3, []]], 1],0]] |	[14, 1, 3, 1, 0]     */

function concatArr(arr) {
   var newArr = [];
   arr.forEach(myFunc)
   function myFunc(el) {
     if (Array.isArray(el)) {
        return el.forEach(myFunc);
     }
     return newArr.push(el);
   }
   return newArr;
}

console.log(concatArr([14, [1, [[[3, []]], 1],0]]));



/* 3.Given a number. Write a function that calculates its sum of the digits and if that sum has
more than 1 digit find the sum of digits of that number. Repeat that process if needed and return the result.
Input	     | Output
14	         |  5
29	         |  2
999999999999 |	9 */

var numsArr1 = [];
var numsArr2 = [];
function myFunc(num) {
  var num1 = "" + num;
  for(var i = 0;i < num1.length;i++) {
    numsArr1.push(+num1[i]);
  }
  var result1 = numsArr1.reduce(function(sum,current) {
    return sum + current;
  },0);
  
  if(result1 > 9) {
    var num2 = "" + result1;
    for(var j = 0;j < num2.length;j++) {
      numsArr2.push(+num2[j]);
    }
    var result2 = numsArr2.reduce(function(sum,current) {
    return sum + current;
  },0);
  return result2;
  }
  return result1;
}

console.log(myFunc(999999999999));


/* 4.Given an object. Invert it (keys become values and values become keys).
If there is more than key for that given value create an array.
Input	                        Output
{a:'1', b:'2'}	             |  {1:'a', 2:'b'}
{a:'1', b:'2', c:'2'}	     |  {1:'a', 2:['b','c']}
{a:'1', b:'2', c:'2', d:'2'} |  {1:'a', 2:['b','c','d']} */

var mutableObj = {};
function myFunc(obj) {
  for(var key in obj) {
    mutableObj[obj[key]] = key;
  }
  console.log(mutableObj);
}

myFunc({a:'1', b:'2'});





 function becameCaseValues(obj = {},result = {}) {
   if (obj === null || typeof obj !== "object") {
     return "write object";
   }
   
   const keys = Object.keys(obj);
   
   for(const key of keys) {
     const value = obj[key];
     if(result.hasOwnProperty(value)) {
       if(!Array.isArray[result[value]]) {
       result[value] = [result[value]];
     }
     result[value].push(key);
   } else {
       result[value] = key;
   }
   return result;
 }


console.log(becameCaseValues({a:'1',b:'2',c:'2', d:'2'}));




















