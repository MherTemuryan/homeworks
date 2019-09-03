/* 1)Write a function, which receives an array as an argument which elements arrays of numbers.
Find biggest negative number of each array. Return product of that numbers.If there is not 
any negative number in an array, ignore that one. Check that items of the given array are arrays.	
Input	                          |  Output
[[2,-9,-3,0],[1,2],[-4,-11,0]]    |  12
[[3,4],[11,0],[5,6,7,8]]	      | 'No negatives'
[1, 2, 3]	                      | 'Invalid Argument' */
let myArr = [[2,-9,-3,0],[1,2],[-4,-11,0]];

function myFunc(arr) {
  let bigNegativNumsProd = [];
  let onlyArr = arr.every(elem => Array.isArray(elem));
  if(!onlyArr) {
    console.log("Invalid Argument");
  }else {
    arr.forEach(function(el) {
      let negativNums = el.filter(function(item) {
        return item < 0;
      });
        negativNums.sort(function(a,b) {
        return b-a;
      });
      if(typeof negativNums[0] === "number") {
        bigNegativNumsProd.push(negativNums[0]);
      }
    });
    if(bigNegativNumsProd.length === 0) {
      console.log("No negatives");
    }else {
      let result = bigNegativNumsProd.reduce(function(sum,i) {
        return sum *= i;
      });
      return result;
    }
  }
}

console.log(myFunc(myArr));


/* 2)Given an array of strings and numbers.
Print the number of integers and the number of strings in the array.
Input 	                    |Output
[1,'10','hi',2,3]	        |"Numbers: 3, Strings: 2"
[1,4,'i am a string','456']	|"Numbers: 2, Strings: 2" */
let myArr = [1,4,'i am a string','456'];
function filterNumbersEndStrings(arr) {
  let nums = arr.filter(elem => typeof elem === "number");
  let strings = arr.filter(elem => typeof elem === "string");
  console.log(`Numbers: ${nums.length}, Strings: ${strings.length}`);
}

filterNumbersEndStrings(myArr);


/* 3)Given an array consisting from the arrays of numbers (like a two-dimensional array).
Find sum of each row and print them as an array.
Input 	                                 | Output
[[3,4,5],[1,0,0],[4,5,4],[8,8,-1]]	     | [12,1,13,15]
[[8,35,2],[8],[5,6,-5,-6],[1,3,-9,0,-1]] | [45,8,0,-6]
[[1],[2],[3],[4]]	                     | [1,2,3,4] */
let myArr = [[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]];
function sumOfArrNums(arr) {
  let newArr = [];
  arr.forEach(function(el) {
      let sumsOfArrDigths = el.reduce(function(sum,elem) {
        return sum += elem;
      },0);
    newArr.push(sumsOfArrDigths);
  });
  console.log(newArr);
}

sumOfArrNums(myArr);


/* 4)Given an array of integers. Write a function that return new array from first array,
where  removed even numbers, and odd numbers was multiplied with new array length
Input 	          | Output
[5,4,78,0,-3,7]	  | [15,-9,21]
[2,4,6,88]	      | []
[]	              | [] */
let myArr = [5,4,78,0, -3,7];

function myFunc(arr) {
  let mulArr = [];
  let newArr = arr.filter(function(elem) {
    return elem % 2 !== 0;
  });
  newArr.forEach(function(el) {
    mulArr.push(el * newArr.length);
  },0);
  console.log(mulArr);
}

myFunc(myArr);


/* 5)Given an array of numbers. Create an array containing only elements once.
Input 	       | Output
[1,2,3,3,2,5]  | [1,2,3,5]
[4, 4]	       | [4] */
let myArr = [1,2,3,3,2,5];

function onlyElementsOnce(arr) {
  let sortedArr = arr.sort();
  let newArr = sortedArr.filter((item,index,arr) => arr.indexOf(item) === index);
  console.log(newArr);
}

onlyElementsOnce(myArr);



/* 6)Given an array. Create the array which elements are products between two neighbours.
Input 	        | Output
[3,7,12,5,20,0]	| [21,84,60,100,0]
[1,1,4,32,6]	| [1,4,128,192] */
let myArr = [3,7,12,5,20,0];

const productsBetweenTwoNeighbours = arr => {
  let result = [];
  let newArr = arr.map((elem,i,arr) => elem * arr[i+1]);
  result = newArr.slice(0,-1);
  console.log(result);
}

productsBetweenTwoNeighbours(myArr);

