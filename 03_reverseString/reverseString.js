const reverseString = function(string) {
    const stringChars = string.split("");
    let reverseStr = "";
    for (let i = stringChars.length - 1; i >= 0; i--) {
        reverseStr += stringChars[i];
    }
    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
