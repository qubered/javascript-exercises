const palindromes = function (word) {
    let cleanWord = word
                        .replace(/[\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '')
                        .toLowerCase();
    let reversedWord = cleanWord
                            .split("")
                            .reverse()
                            .join("")
    return reversedWord == cleanWord;
};

// Do not edit below this line
module.exports = palindromes;
