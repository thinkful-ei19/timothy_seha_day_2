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