
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

    let nameInputId = "name_input_" + indexBook;    
    let nameInputRef = document.getElementById(nameInputId);
    let nameInput = nameInputRef.value;
    
    if((commentInput != "") && (nameInput != "")) {
        books[indexBook].comments.push({
            "name": nameInput,
            "comment": commentInput
          });
        commentInputRef.value = "";
        nameInputRef.value = "";

        saveToLocalStorage();
        renderComments(indexBook);
    }
    sendAlert(nameInput, commentInput)
}

function sendAlert(nameInput, commentInput) {
    if((commentInput == "") && (nameInput == "")){
        alert('Schreibe deinen Namen und einen Kommentar.');
    } if ((commentInput == "") && !(nameInput == "")) {
        alert('Schreibe einen Kommentar.');
    } if(!(commentInput == "") && (nameInput == "")) {
        alert('Trage deinen Namen ein.');
    }
}