
const tableBody = document.querySelector("tbody");


const myLibrary = [
    {
        id: 5,
        title: "smile",
        author: "jenna",
        pages: 5,
        read: true
    }
];


function Book(id, title, author, pages, read) {
    if (!new.target){
        throw Error ("You must use the 'new' operator");
    }
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary(title, author, pages, read){
    myLibrary.push(crypto.randomUUID(), title, author, pages, read);
}


function displayBooks(bookArray){

    // creating DOM fragment
    const tableRows = document.createDocumentFragment();

    // iteratively adding new book rows to DOM fragment
    for (let i = 0; i < bookArray.length; i++){

        // creating row
        const row = tableBody.appendChild(document.createElement("tr"));

        // adding id
        const id = row.appendChild(document.createElement("td"));
        id.textContent = bookArray[i].id;
        
        // adding title
        const title = row.appendChild(document.createElement("td"));
        title.textContent = bookArray[i].title;

        // adding author
        const author = row.appendChild(document.createElement("td"));
        author.textContent = bookArray[i].author;

        // adding pages
        const pages = row.appendChild(document.createElement("td"));
        pages.textContent = bookArray[i].pages;

        // adding read
        const read = row.appendChild(document.createElement("td"));
        read.textContent = bookArray[i].read;

    }

    // Appending fragment to HTML
    tableBody.appendChild(tableRows);
    
}



