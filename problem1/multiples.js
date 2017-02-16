function multiplesList(a, b, c) {
	var multipleList = [];

	for(var i = 1; i <= c; i++) {
		if(i % a == 0 || i % b == 0) {
			multipleList.push(i);
		}
	}
	return multipleList;
}

function multiplesSum(a, b, c) {
	var multiplesSum = 0;

	for(var i = 1; i <= c; i++) {
		if(i % a == 0 || i % b == 0) {
			multiplesSum += i;
		}
	}
	return multiplesSum;
}

function test() {
	var fruits = [];
	fruits.push('Apple', 'Banana', 'Peach');

	console.log(fruits.length);
}