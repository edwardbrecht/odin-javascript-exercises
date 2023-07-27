const palindromes = function (str) {
    const newStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const splitStr = newStr.split("");
    const reverseArr = splitStr.reverse();
    const reverseStr = reverseArr.join("");
    return newStr === reverseStr;
    
};

// Do not edit below this line
module.exports = palindromes;
