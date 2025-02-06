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
                    <table>
                        <tbody>
                            <tr><td>[Kevin]</td><td>: Hallo, ich mag Bananas</td></tr>
                            <tr><td>[Kevin]</td><td>: LBJkb akjkba</td></tr>
                            <tr><td>[Leser123]</td><td>: Fantastische Buch</td></tr>
                        </tbody>
                    </table>
                </div>

                <div class="new_comment_section">
                    <input id="comment_input" class="comment_input" type="text" placeholder="Schreibe dein Kommentar...">
                    <button><img class="send_button_img" src="./img/icons/send_button.png" alt="send_button"></button>
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
                    <table>
                        <tbody>
                            <tr><td>[Kevin]</td><td>: Hallo, ich mag Bananas</td></tr>
                            <tr><td>[Kevin]</td><td>: LBJkb akjkba</td></tr>
                            <tr><td>[Leser123]</td><td>: Fantastische Buch</td></tr>
                        </tbody>
                    </table>
                </div>

                <div class="new_comment_section">
                    <input id="comment_input" class="comment_input" type="text" placeholder="Schreibe dein Kommentar...">
                    <button><img class="send_button_img" src="./img/icons/send_button.png" alt="send_button"></button>
                </div>
            </div>
        `;
}
