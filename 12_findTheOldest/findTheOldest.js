const findTheAge = (birth, death) => {
    // If person is not dead i.e. year of death undefined
    if (!death) {
        console.log(death);
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function (people) {
    return people.reduce((oldest, current) => {
        let oldestAge = findTheAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let currentAge = findTheAge(current.yearOfBirth, current.yearOfDeath);
        // Return people object
        return oldestAge < currentAge ? current : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
