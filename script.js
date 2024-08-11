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
const AnnaKarenia = new Book("Anna-Karenia", "Leo Tolstoi", 1200, false);

addBookToLibrary(Musashi);
addBookToLibrary(AnnaKarenia);

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


