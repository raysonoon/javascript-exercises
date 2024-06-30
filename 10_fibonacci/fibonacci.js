const fibonacci = function(member) {
    if (parseInt(member) === 0) {
        return 0;
    }
    
    if (member < 0) {
        return "OOPS";
    }
    
    if (!Number.isInteger(member)) {
        parseInt(member);
    }

    let firstPrev = 1, secondPrev = 0;

    for (i = 2; i <= member; i++) {
        // i = 2 --> firstPrev 1, 3 --> firstPrev 2, 4 --> firstPrev 5
        let current = 0;
        current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
