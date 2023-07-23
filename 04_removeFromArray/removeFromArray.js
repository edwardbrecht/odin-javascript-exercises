const removeFromArray = function(arr, rem) {
    for (let i = 1; i < arguments.length; i++)
    arr = arr.filter(item => item !== arguments[i]);
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
