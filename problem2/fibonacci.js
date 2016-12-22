//n is returned array size
function fibonacci(n) {
	var total = 1;
	var previousTotal = 0;
	var fibonacciNumbers = [];
	var temp = 0;

	for(var i = 1; i <= n; i++) {
		temp = total;
		total += previousTotal;
		previousTotal = temp;

		fibonacciNumbers.push(total);
	}
	return fibonacciNumbers;
}

//n is value returned array should not exceed
function evenFibonacci(n) {
	var total = 1;
	var previousTotal = 0;
	var evenSum = 0;
	var temp = 0;

	while(total + previousTotal < n) {
		temp = total; 
		total = total + previousTotal; 
		previousTotal = temp;

		if(total % 2 == 0) {
			evenSum += total;
		}
	}
	return evenSum;
}