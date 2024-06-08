const sumAll = function (num1, num2) {
    let sum = 0, startNum, endNum;
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }
    
    if (num1 <= num2) {
        startNum = num1;
        endNum = num2;
    } else {
        startNum = num2;
        endNum = num1;
    }

    for (i = startNum; i <= endNum; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
