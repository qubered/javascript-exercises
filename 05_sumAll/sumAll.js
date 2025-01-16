const sumAll = function(min,max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
        const tempNum = min;
        min = max;
        max = tempNum;
    };

    let calc = 0;
    for (let i = min; i <= max; i++) {
        calc+=i;
    }
    return calc;
};



// Do not edit below this line
module.exports = sumAll;
