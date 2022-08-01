const removeFromArray = function (arr, ...args) {
	args.forEach(arg => (arr = arr.filter(element => element !== arg)));
	return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
