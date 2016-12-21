function fibonacciNumbers(amount) {
	//amount is how many different numbers are returned

	var hold = 0;
	var total = 1;
	var previous = 0;

	for(var i = 1; i <= amount; i++) {
		hold = total;
		total = total + previous;
		previous = hold;

		console.log(total);
	}
}

function fibonacciUpTo(limit) {
	//limit stops numbers being returned over a certain value

	var hold = 0;
	var total = 1;
	var previous = 0;

	while(total + previous < limit) {
		hold = total;
		total = total + previous;
		previous = hold;

		console.log(total);
	} 
}