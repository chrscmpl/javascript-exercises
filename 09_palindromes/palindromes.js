const palindromes = function (str) {
	// removes all punctuation and whitespace
	str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').replace(/\s/g, '');

	str = str.toLowerCase();

	for (let i = 0; i < str.length / 2; i++)
		if (str[i] !== str[str.length - 1 - i]) return false;
	return true;
};

// Do not edit below this line
module.exports = palindromes;
