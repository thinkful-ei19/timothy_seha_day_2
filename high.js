function repeat(fn, n){
	for(let i = 0; i < n; i++){
		fn();
	}
}
function hello() {
	console.log('Hello World');
}
function goodbye() {
	console.log('Goodbye World');
}
repeat(hello, 5);
repeat(goodbye, 5);


// DO NOT EDIT BETWEEN THESE LINES ----->
// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
    // This is a "predicate function" - it's a function that only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// TASK: DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr ,fn){
 let newArray = [];
 for (let i=0; i<arr.length; i++){
  if( fn(arr[i])=== true) {
	  newArray.push(arr[i]);
  }
 }
 return newArray;
}

// console.log(filter(myNames, name => names[0] === 'R'));



function hazardWarningCreator(typeOfWarning){
	let warningCounter =  0;
	return function (location){
			warningCounter ++;
		console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
		console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
    return warningCounter;
	};
}
const rocksWarning = hazardWarningCreator('Rocks on the Road');
const constructionAreaWarning = hazardWarningCreator('Watch for moving Equipment');
const radiotionAreaWarning = hazardWarningCreator('High radiation area');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');
radiotionAreaWarning('Aden Ln');
constructionAreaWarning ('hdjd st');
rocksWarning('Main St');


function turtleMovement (arr) {
	
	arr.filter(function (steps) { 
         return steps[0] >= 0 && steps[1] >= 0
	}).map(function(steps) {
		return steps[0] + steps[1];
	} ).forEach(function(stepCount){
		console.log(stepCount)
	})
	
	// make a callback function to added the first index numbers and second index numbers in the array
	// use forEach method to log out how many step the turtle took forward and to the left 
 }
	 
 


// console.log(turtleMovement([[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]])); 
