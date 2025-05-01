
const myLibrary = [];

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

