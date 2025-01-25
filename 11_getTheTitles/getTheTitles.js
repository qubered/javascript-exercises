const getTheTitles = function(bookArray) {
    titles = []
    bookArray.map(book => {
        titles.push(book.title)
    })
    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
