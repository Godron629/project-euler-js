/*a and b are multiples to test and 
c is the upper limit of returned values*/
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
