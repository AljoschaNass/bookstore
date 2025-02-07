function getBookTemplateFavorite(indexBook) {
    return `
            <div class="book_section">
                <div class="book_title_section"><h2>${books[indexBook].name}</h2>
                </div>

                <div class="seperator"></div>

                <div class="book_img_section">
                    <img class="book_img" src="./img/books/book1.svg" alt="book-img">
                </div>

                <div class="seperator"></div>

                <div class="price_section">
                    <p>${books[indexBook].price} €</p>
                    <div class="favorite_section">
                        <p>${books[indexBook].likes}</p>
                        <img id="favorite" class="favorite_icons d_flex" onclick="changeFavorite(${indexBook})" src="./img/icons/favorite.png" alt="">
                    </div>
                </div>

                <div class="book_data_section">
                    <table>
                        <tr><th>Author</th><td>: ${books[indexBook].author}</td></tr>
                        <tr><th>Erscheinungsjahr</th><td>: ${books[indexBook].publishedYear}</td></tr>
                        <tr><th>Genre</th><td>: ${books[indexBook].genre}</td></tr>
                    </table>
                </div>

                <div class="seperator"></div>

                <div class="old_comments_section">
                    <h3>Kommentare:</h3>
                     <div class="all_comments">
                        <table>
                            <tbody id="comments_book_${indexBook}">
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="new_comment_section">
                    <div class="inputs">
                        <input id="name_input_${indexBook}" class="name_input" type="text" placeholder="Name..">
                        <input id="comment_input_${indexBook}" class="comment_input" type="text" placeholder="Schreibe dein Kommentar...">
                    </div>
                    <button onclick="addComment(${indexBook})"><img class="send_button_img" src="./img/icons/send_button.png" alt="send_button"></button>
                </div>
            </div>
        `;
}

function getBookTemplateNoFavorite(indexBook) {
    return `
            <div class="book_section">
                <div class="book_title_section"><h2>${books[indexBook].name}</h2>
                </div>

                <div class="seperator"></div>

                <div class="book_img_section">
                    <img class="book_img" src="./img/books/book1.svg" alt="book-img">
                </div>

                <div class="seperator"></div>

                <div class="price_section">
                    <p>${books[indexBook].price} €</p>
                    <div class="favorite_section">
                        <p>${books[indexBook].likes}</p>
                        <img id="no_favorite" class="favorite_icons d_flex" onclick="changeFavorite(${indexBook})" src="./img/icons/no_favorite.png" alt="">
                    </div>
                </div>

                <div class="book_data_section">
                    <table>
                        <tr><th>Author</th><td>: ${books[indexBook].author}</td></tr>
                        <tr><th>Erscheinungsjahr</th><td>: ${books[indexBook].publishedYear}</td></tr>
                        <tr><th>Genre</th><td>: ${books[indexBook].genre}</td></tr>
                    </table>
                </div>

                <div class="seperator"></div>

                <div class="old_comments_section">
                    <h3>Kommentare:</h3>
                    <div class="all_comments">
                        <table>
                            <tbody id="comments_book_${indexBook}">
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="new_comment_section">
                    <div class="inputs">
                        <input id="name_input_${indexBook}" class="name_input" type="text" placeholder="Name..">
                        <input id="comment_input_${indexBook}" class="comment_input" type="text" placeholder="Schreibe dein Kommentar...">
                    </div>
                    <button onclick="addComment(${indexBook})"><img class="send_button_img" src="./img/icons/send_button.png" alt="send_button"></button>
                </div>
            </div>
        `;
}

function getCommentsTemplate(indexBook, indexComments) {
    return `
            <tr>
                <td>[${books[indexBook].comments[indexComments].name}]</td>
                <td>: ${books[indexBook].comments[indexComments].comment}</td>
            </tr>
        `;
}