const add = function (a, b) {
	return a + b;
};

const subtract = function (a, b) {
	return a - b;
};

const sum = function (v) {
	return v.reduce((acc, elem) => acc + elem, 0);
};

const multiply = function (v) {
	return v.reduce((acc, elem) => acc * elem, 1);
};

const power = function (a, b) {
	return a ** b;
};

const factorial = function (n) {
	if (n < 0) return;
	if (n < 2) return 1;
	return factorial(n - 1) * n;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
