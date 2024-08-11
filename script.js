const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}


// ExampleBooks

const Musashi = new Book("Musashi", "Eli Yoshikawa", 700, true);
const AnnaKarenia = new Book("Anna-Karenia1", "Leo Tolstoi", 1200, false);
const AnnaKarenia2 = new Book("Anna-Karenia2", "Leo Tolstoi", 1200, false);
const AnnaKarenia3 = new Book("Anna-Karenia3", "Leo Tolstoi", 1200, false);
const AnnaKarenia4 = new Book("Anna-Karenia4", "Leo Tolstoi", 1200, false);
const AnnaKarenia5 = new Book("Anna-Karenia5", "Leo Tolstoi", 1200, false);
const AnnaKarenia6 = new Book("Anna-Karenia6", "Leo Tolstoi", 1200, false);
const AnnaKarenia7 = new Book("Anna-Karenia7", "Leo Tolstoi", 1200, false);
const AnnaKarenia8 = new Book("Anna-Karenia8", "Leo Tolstoi", 1200, false);
const AnnaKarenia9 = new Book("Anna-Karenia9", "Leo Tolstoi", 1200, false);
const AnnaKarenia10 = new Book("Anna-Karenia10", "Leo Tolstoi", 1200, false);
const AnnaKarenia11 = new Book("Anna-Karenia11", "Leo Tolstoi", 1200, false);


addBookToLibrary(Musashi);
addBookToLibrary(AnnaKarenia);
addBookToLibrary(AnnaKarenia2);
addBookToLibrary(AnnaKarenia3);
addBookToLibrary(AnnaKarenia4);
addBookToLibrary(AnnaKarenia5);
addBookToLibrary(AnnaKarenia6);
addBookToLibrary(AnnaKarenia7);
addBookToLibrary(AnnaKarenia8);
addBookToLibrary(AnnaKarenia9);
addBookToLibrary(AnnaKarenia10);
addBookToLibrary(AnnaKarenia11);


//display Books in Document

const bookContainerDiv = document.querySelector(".Book-container");

myLibrary.forEach(book => {
    // get the vars for convinience
    const title = book.title
    const author = book.author
    const pages = book.pages
    const readingStatus = book.isRead
    
    
    // create Book card
    const bookDiv = document.createElement("div")
    bookDiv.classList.add(title)
    bookDiv.style.flex = "1 1 0"
    bookDiv.style.maxWidth = "200px"
    bookDiv.style.maxHeight = "200px"
    bookDiv.style.border = "2px solid black"
    bookDiv.style.margin = "10px"

    //create Text for Book card
    const info = document.createElement("p")
    info.textContent += title
    //...ad more info...

    //add info to div
    bookDiv.appendChild(info)


    //add div to bookContainerDiv
    bookContainerDiv.appendChild(bookDiv)
});


