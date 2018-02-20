function max(numbers){
	let currentMax = numbers[0];
	let i = 0;
	while(i < numbers.length){
		if(numbers[i] > currentMax){
			currentMax = numbers[i];
		}
		i ++;
	}
    return currentMax;
}
max([34, 54, 90, 67,95]);
console.log(max([34, 54, 90, 67,95]));

function min(numbers){
	let currentMin = numbers[0];
	let i = 0;
	while(i < numbers.length){
		if(numbers[i] < currentMin){
			currentMin = numbers[i];
		}
		i++;
	}
	return currentMin;
}
min([34, 54, 90, 67,95]);
console.log(min([34, 54, 90, 67,95]));

function computeTheAverage(arr){
	let sum = 0  
	   arr.forEach(function addNumber (number){
   
		sum += number;
		
	}) 
	return sum / arr.length;
   } 
   
   console.log(computeTheAverage([20, 50, 59, 68]));