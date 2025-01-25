const fibonacci = function(num) {
    if (num==NaN || num < 0) {
        return "OOPS"
    } else if (num == 0) {
        return 0;
    };
    let a = 1;
    let b = 0;
    for (let i=2; i<=num; i++) {
        let current = a+b;
        b=a;
        a=current;
    }
    return a;
};

// Do not edit below this line
module.exports = fibonacci;

