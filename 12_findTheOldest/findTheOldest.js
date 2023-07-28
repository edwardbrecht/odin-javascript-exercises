const findTheOldest = function(people) {
    const oldest = people.reduce((oldest, person) => {
        oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
        personAge = getAge(person.yearOfDeath, person.yearOfBirth);
        return personAge > oldestAge ? person : oldest;
    });
    return oldest;
};

function getAge(death, birth) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
