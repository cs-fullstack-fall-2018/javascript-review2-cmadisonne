//back at it with the classes
class book {
    constructor(bookName, rating, yearReleased) {
        this.name = bookName;
        this.rating = rating;
        this.year = yearReleased;
    }
}

function printAllAtts(){
        alert(book);
    }

function main() {
    thisBook = new book("Twilight", 9, 2005);
    thatBook = new book("Before I Go", 10, 2010);
    console.log(thisBook);
    console.log(thatBook);
}
main();