const repeatString = function(string,amount) {
    let complete = "";
    if (amount < 0) {
        complete = "ERROR";
    }
    else {
        for (let i=0; i<amount; i++) {
            complete = complete.concat(string)
        };
    }
    return complete;

};


// Do not edit below this line
module.exports = repeatString;
