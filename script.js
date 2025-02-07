
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
        renderComments(indexBook);
    } 
}

function renderComments(indexBook) {
    let commentsId = "comments_book_" + indexBook;    
    let commentsRef = document.getElementById(commentsId);
    commentsRef.innerHTML = "";

    for (let indexComments = 0; indexComments < books[indexBook].comments.length; indexComments++) {
        commentsRef.innerHTML += getCommentsTemplate(indexBook, indexComments);
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

function addComment(indexBook) {
    let commentInputId = "comment_input_" + indexBook;    
    let commentInputRef = document.getElementById(commentInputId);
    let commentInput = commentInputRef.value;
    
    if(commentInput != "") {
        books[indexBook].comments.push({
            "name": "Gast",
            "comment": commentInput
          });

        commentInputRef.value = "";

        saveToLocalStorage();
        renderComments(indexBook);
    }
}