const fibonacci = function(num) {
    num = +num;
    if (num < 0) return "OOPS";
    if (num === 0) return 0;
    if (num <= 2) return 1;
    let n1 = 1;
    let n2 = 1;
    let fib = 0;
    for (let index = 2; index < num; index++){
       fib = n1 + n2;
       n1 = n2;
       n2 = fib;
    }
    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
