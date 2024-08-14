const myLibrary = [];
const addBookBtn = document.querySelector(".addBook");
const modal = document.querySelector(".modal")
const modalAdd = document.querySelector(".addBook")
const bookContainerDiv = document.querySelector(".Book-container");

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

addBookBtn.addEventListener("click", (e)=> {
    modal.style.display = "block";
});

const form = document.getElementById("bookForm");
form.addEventListener("submit",(e)=> {
    e.preventDefault()
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const isRead = document.querySelector("#isRead").checked;


    const newBook = new Book(title, author, pages, isRead);
    addBookToLibrary(newBook);
    displayBooks();
    modal.style.display = "none";
    form.reset();
})

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


function displayBooks ()  {
    bookContainerDiv.innerHTML =""
    myLibrary.reverse().forEach(book => {
        // get the vars for convinience
    const title = book.title
    const author = book.author
    const pages = book.pages
    const readingStatus = book.isRead
    
    const bookDiv = document.createElement("div")
    const buttonDiv = document.createElement("div")
    buttonDiv.classList.add("buttonDiv")

    const deleteBookBtn = document.createElement("button");
    deleteBookBtn.classList.add("deleteBtn")
    deleteBookBtn.textContent ="Remove"
    deleteBookBtn.addEventListener("click",(e) =>{
        e.target.parentElement.parentElement.remove()
    } )

    const toggleStatusBtn = document.createElement("button");
    toggleStatusBtn.classList.add("statusBtn")
    let status = readingStatus? "not read": "read"
    toggleStatusBtn.textContent = status;

    toggleStatusBtn.addEventListener("click", (e) => {
        const field = e.target.parentElement.parentElement.querySelector(".isRead")
        field.textContent = field.textContent === "Read: yes" ? "Read: no" : "Read: yes"
    toggleStatusBtn.textContent = field.textContent === "Read: yes" ? "Unread" : "read"


    })

    
    // create Book card
    bookDiv.classList.add("card")
    bookDiv.classList.add(title)
    
    
    //create Text for Book card
    const titleParagraph = document.createElement("p");
    titleParagraph.textContent = `Title: ${book.title}`;

    const authorParagraph = document.createElement("p");
    authorParagraph.textContent = `Author: ${book.author}`;

    const pagesParagraph = document.createElement("p");
    pagesParagraph.textContent = `Pages: ${book.pages}`;

    const readStatusParagraph = document.createElement("p");
    readStatusParagraph.classList.add("isRead")
    readStatusParagraph.textContent = `Read: ${book.isRead ? "Yes" : "No"}`;

    // Append each paragraph to the bookDiv
    bookDiv.appendChild(titleParagraph);
    bookDiv.appendChild(authorParagraph);
    bookDiv.appendChild(pagesParagraph);
    bookDiv.appendChild(readStatusParagraph);

    
    //add info to div
    buttonDiv.appendChild(deleteBookBtn)
    buttonDiv.appendChild(toggleStatusBtn)

    bookDiv.appendChild(buttonDiv)
    
    
    //add div to bookContainerDiv
    bookContainerDiv.appendChild(bookDiv)
});
}

displayBooks();


