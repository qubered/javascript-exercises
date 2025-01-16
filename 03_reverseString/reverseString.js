const reverseString = function(string) {
    let stringArray = [...string];
    let stringArrayLen = stringArray.length;
    let reversedString = "";
    for (let i=0; i<stringArrayLen; i++) {
        let poppedLetter = stringArray.pop();
        reversedString += poppedLetter;
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
