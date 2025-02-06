
function init() {
    renderBooks();
}

function renderBooks() {
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";

    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        contentRef.innerHTML += getBookTemplate(indexBook);
    }
}
function changeFavorite(indexBook) {
    if(books[indexBook].liked) {
        toggleFavorite();
        books[indexBook].liked = false;  
        books[indexBook].likes -= 1;
        //renderBooks();
    }
    else {
        toggleFavorite();
        books[indexBook].liked = true;
        books[indexBook].likes += 1;
        //renderBooks();
    }
}

function toggleFavorite() {
    let favoriteRef = document.getElementById("favorite");
    favoriteRef.classList.toggle("d_none");
    favoriteRef.classList.toggle("d_flex");


    let noFavoriteRef = document.getElementById("no_favorite");
    noFavoriteRef.classList.toggle("d_none");
    noFavoriteRef.classList.toggle("d_flex");
}
