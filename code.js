
const tableBody = document.querySelector("tbody");
const newBookButton = document.querySelector("#new-book");
const formContainer = document.querySelector("#form-container");


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
    myLibrary.push(new Book(crypto.randomUUID(), title, author, pages, read));
}


function displayBooks(bookArray){

    // clearing table
    tableBody.innerHTML = "";

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
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = bookArray[i].read;
        read.appendChild(checkbox);

        // adding checkbox listener
        checkbox.addEventListener("change", e => {
            myLibrary[i].read = e.target.checked;
        })

        // adding remove button
        const remove = row.appendChild(document.createElement("td"));
        const button = document.createElement("button");
        button.setAttribute("id", "remove");
        button.textContent = "Remove";
        remove.appendChild(button);

        // adding "click" listener to remove button
        button.addEventListener("click", e => {

            // removing from array
            myLibrary.splice(i, 1);

            // removing from table
            row.remove();

        })

        // adding to tableRows
        tableBody.appendChild(row);
    }

}


const addFormField = function(form, inputTitle){

    // Creating label
    const label = form.appendChild(document.createElement("label"));
    label.setAttribute("for", inputTitle);
    label.textContent = inputTitle;

    // Creating input
    const input = form.appendChild(document.createElement("input"));
    if (inputTitle === "read"){
        input.setAttribute("type", "checkbox")
    }else{
        input.setAttribute("type", "text");
    }
    input.setAttribute("id", inputTitle);
    input.setAttribute("name", inputTitle);

}


const createForm = function(){

    // Creating Form
    const form = document.createElement("form");

    // Calling addFormField Helper Function
    addFormField(form, "title");
    addFormField(form, "author");
    addFormField(form, "pages");
    addFormField(form, "read");

    // Adding Submit Button 
    const button = form.appendChild(document.createElement("button"));
    button.setAttribute("type", "submit");
    button.textContent = "Submit";

    // Returning Form
    return form;

}


// Creating Form
newBookButton.addEventListener("click", () => {

    // Display Form 
    const form = createForm();
    formContainer.appendChild(form);

    // Add Submit Button Event Listener
    form.addEventListener("submit", (e) => {

        // preventing page refresh
        e.preventDefault();

        // extracting form inputs
        const title = form.elements.title.value;
        const author = form.elements.author.value;
        const pages = form.elements.pages.value;
        const read = form.elements.read.checked;

        // creating new book row in array
        addBookToLibrary(title, author, pages, read);

        // updating display
        displayBooks(myLibrary);

        // clearing inputs
        form.reset();

        // removing form
        formContainer.innerHTML = "";
    })
})






