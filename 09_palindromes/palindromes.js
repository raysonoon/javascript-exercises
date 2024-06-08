const palindromes = function (string) {
    let reversedString = string.split("").reverse().join("");
    // Remove punctuations & spaces between words
    // Regex matches any non-word char, whitespace or underscore
    return reversedString.toLowerCase().replace(/[^\w\s]|_/g, "").split(" ").join("") === string.toLowerCase().replace(/[^\w\s]|_/g, "").split(" ").join("");
  
};

// Do not edit below this line
module.exports = palindromes;
