const sumAll = function (a, b) {
	//return 'ERROR' for non numbers
	if (typeof a !== 'number' || typeof b !== 'number') return 'ERROR';
	//return 'ERROR' for negative numbers
	if (a < 0 || b < 0) return 'ERROR';

	//make sure a is the smallest
	if (b < a) {
		a += b;
		b = a - b;
		a -= b;
	}

	let res = 0;
	for (let i = a; i <= b; i++) res += i;
	return res;
};

// Do not edit below this line
module.exports = sumAll;
