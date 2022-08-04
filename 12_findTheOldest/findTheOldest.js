const findTheOldest = function (people) {
	return people.reduce((oldest, person) => {
		return getAge(oldest) > getAge(person) ? oldest : person;
	}, {});
};

const getAge = function (person) {
	return (
		('yearOfDeath' in person ? person.yearOfDeath : new Date().getFullYear()) -
		person.yearOfBirth
	);
};

// Do not edit below this line
module.exports = findTheOldest;
