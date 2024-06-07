const removeFromArray = function(array, toRemove1, toRemove2, toRemove3, toRemove4) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === toRemove1 || array[i] === toRemove2
            || array[i] === toRemove3 || array[i] === toRemove4
        ) {
            array.splice(i, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
