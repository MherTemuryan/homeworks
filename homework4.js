/* 1. Given an array of integers, find the pair of adjacent elements
 that has the largest product and return that product. */
let myArr = [3,10,9,5,11,8];

function func(arr) {
  let mulOf2elem = [];
  for(let i = 0;i < arr.length - 1;i++) {
    mulOf2elem.push(arr[i] * arr[i + 1]);
  }
  console.log(Math.max(...mulOf2elem));
}

func(myArr);



/* 2. Given an array of integers. All numbers are unique. Find the count of missing
 numbers between minimum and maximum elements to make integers sequence. */
let myArr = [5,7,3,10];

function f(arr) {
  let minNum = Math.min(...arr);
  let maxNum = Math.max(...arr);
  let count = 0;
  for(let i = minNum;i < maxNum;i++) {
    if(arr.includes(i)) continue;
    count++;
  }
  console.log(`Minimun number : ${minNum}`);
  console.log(`Maximun number : ${maxNum}`);
  console.log(`Count of missing numbers between minimum and maximum elements : ${count}`);
}

f(myArr);



/* 3. Convert a long phrase to its acronym.
Input	             Output
"Prisoner of War"	 "POW"
"Have a good night"  "HAGN" */
let myStr = "Have a good night";

function convertToAcronym(str) {
  str = str.split(" ");
  let acronym = "";
  for(let i = 0;i < str.length;i++) {
    let firstLetter = str[i][0];
    acronym += firstLetter;
  }
  console.log(acronym.toUpperCase());
}

convertToAcronym(myStr);


/* 4. Given a string of digits, output all the contiguous substrings of length n in that string.
Input	        Output
"495215", 3	    "495","952","521","215"
"abcdfghz", 7	"abcdfgh","bcdfghz" */
function func(str,number) {
  for(let i = 0;i < str.length;i++) {
    let part = str.substr(i,number);
    if(part.length === number) {
      console.log(part);
    }
  }
}

func("abcdfghz", 7);



/* 5. Create a function that builds a tree like object given an array 
with object which contains parent and id properties. */
/* var treeNodes = [                  
{parent : null, id : 0},
{parent : 0, id : 1},
{parent : 0, id : 2},
{parent : 1, id : 3},
{parent : 1, id : 4},
{parent : 2, id : 5},
{parent : 4, id : 6},
]; */   //You are given an object like this
 
/* var tree = {
	0: {
		1: {
			3: {
				
			},
			4: {
				6: {
					
				}
			}
		},
		2: {
			5: {
				
			}
		}
	}
} */   //You should create an object like this:

:(

/* 6. Given the list of the following readers: 
let myBooks = [
	{ book: "Catcher in the Rye", readStatus: true, percent: 40},
	{ book: "Animal Farm", readStatus: true, percent: 20},
	{ book: "Solaris", readStatus: false, percent: 90 },
	{ book: "The Fall", readStatus: true, percent: 50 },
	{ book: "White Nights", readStatus: false, percent: 60 } ,
	{ book: "After Dark", readStatus: true, percent: 70 }
];
Output the books sorted by the percent in descending order which readStatus is true. */
let myBooks = [
	{ book: "Catcher in the Rye", readStatus: true, percent: 40},
	{ book: "Animal Farm", readStatus: true, percent: 20},
	{ book: "Solaris", readStatus: false, percent: 90 },
	{ book: "The Fall", readStatus: true, percent: 50 },
	{ book: "White Nights", readStatus: false, percent: 60 } ,
	{ book: "After Dark", readStatus: true, percent: 70 }
];

let onlyReadStatusTrue = myBooks.filter(item => item.readStatus === true);
onlyReadStatusTrue.sort((a, b) => b.percent - a.percent);
onlyReadStatusTrue.forEach(elem => console.log(`${elem.book} : ${elem.percent}`));














