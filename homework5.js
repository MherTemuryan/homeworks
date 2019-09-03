/* 1. Write a function, which will receive a number between 0 to 999,999
and spell out that number in English.
Input	Output
5	   ‘five’
25	   ‘twenty five’
425	   “four hundred twenty five”
9425	“nine thousand four hundred twenty five”
79425	“seventy nine thousand four hundred twenty five”
179425	“one hundred seventy nine thousand four hundred twenty five” */
const thousand = ['','thousand'];
const nums0To9 = ['zero','one','two','three','four','five','six',
          'seven','eight','nine'];
const nums10To19 = ['ten','eleven','twelve','thirteen','fourteen',
           'fifteen','sixteen','seventeen','eighteen','nineteen'];
const nums20To90 = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function numsInEnglish(s) {
  s += "";
  if (s != parseFloat(s)) return 'not a number';
  let x = s.length;
  
  if (x > 6) return 'Too big! Only 0 - 999999';
  if (s < 0) return 'Too small! Only 0 - 999999';
  if(s == 0) return nums0To9[0];
  let n = s.split('');
  let str = '';
  let num = 0;
  for (let i=0;i < x;i++) {
    if ((x-i) % 3 == 2) {
      if(n[i] == '1') {
        str += nums10To19[Number(n[i+1])] + ' ';
        i++;
        num = 1;
      } else if (n[i]!=0) {
        str += nums20To90[n[i]-2] + ' ';
        num = 1;
      }
    } else if(n[i]!=0) {
      str += nums0To9[n[i]] +' ';
      if ((x-i) % 3==0) str += 'hundred ';
      num = 1;
    }
    if ((x-i) % 3==1) {
      if (num)
        str += thousand[(x-i-1)/3] + ' ';
      num = 0;
    }
  }
  return str;
}

console.log(numsInEnglish(-770));



/* 2. Write a JavaScript function to get all possible subsets of length 3 of the given array.
 Assume that all elements in the array are unique.
Input	                Output
[4]	                    [4]
[19, 6]	                [19, 6]
[5, 9, 23, 0, -2, -1]	[[5, 9, 23], [5, 9, 0], [5, 9, -2], [5, 9, -1], [5, 23, 0], 
                        [5, 23, -2], [5, 23, -1], [5, 0, -2], [5, 0, -1], [5, -2, -1],
						[9, 23, 0], [9, 23, -2], [9, 23, -1], [9, 0, -2], [9, 0, -1], 
						[9, -2, -1], [23, 0, -2], [23, 0, -1], [23, -2, -1], [0, -2, -1]] */
let myArr = [5, 9, 23, 0, -2, -1];

function myFunc(arr) {
  if(arr.length <= 3) return arr; 
  let result = [];
  result.push([]);
  arr.forEach(function(item) {
   let length = result.length;
    for(let i =0;i < length;i++) {
      let newArr = result[i].slice(0);
      newArr.push(item);
      result.push(newArr);
    }
  })
  return result.filter(elem => elem.length === 3);
}

console.log(myFunc(myArr));
						
						
						
/* 3. Given a word and a list of possible anagrams, select the correct sublist.
Input	                                                        Output
"listen", ["enlists", "google", "inlets", "banana"]	            ["inlets"]
"pencil", ["licnep", "circular", "pupil", "nilcpe", "leppnec"]	["licnep", "nilcpe"]
 */
let words = ["licnep", "circular", "pupil", "nilcpe", "leppnec"];

function myFunc(word,arr) {
  word = word.split("").sort().join("");
  let newArr = [];
  let anagrams = [];
  for(let i = 0;i < arr.length;i++) {
    newArr[i] = arr[i].split("").sort().join("");
    if(newArr[i] === word) {
      anagrams.push(arr[i]);
    }
  }
  if(anagrams.length === 0) {
    return "No matches!";
  }
  return anagrams;
}

console.log(myFunc("pencilf",words));



/* 4)Write a function, which receives an array as an argument which elements arrays of numbers.
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


























