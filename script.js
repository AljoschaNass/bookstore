
function init() {
    getFromLocalStorage();
    renderBooks();
}

function renderBooks() {
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";

    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        if(books[indexBook].liked) {
            contentRef.innerHTML += getBookTemplateFavorite(indexBook);
        } else {
            contentRef.innerHTML += getBookTemplateNoFavorite(indexBook);
        }
    } 
}

function saveToLocalStorage(){
    localStorage.setItem("books", JSON.stringify(books));
}

function getFromLocalStorage() {
    let myBooks = JSON.parse(localStorage.getItem("books"));
    if(myBooks != null) {
        books = myBooks;        
    }
}

function changeFavorite(indexBook) {
    if(books[indexBook].liked) {
        books[indexBook].liked = false;  
        books[indexBook].likes -= 1;
        renderBooks();
    } else {
        books[indexBook].liked = true;
        books[indexBook].likes += 1;
        renderBooks();
    }
    saveToLocalStorage();
}