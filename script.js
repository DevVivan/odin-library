const newBookButton = document.querySelector('.new-book-button')
const submitBookButton = document.querySelector('.submit-book-button')
const modal = document.querySelector('.modal');
const newBookForm = document.querySelector('.book-form');

function displayBooks() {
    for (let i = 0; i < library.length; i++) {
        const bookList = document.querySelector('.book-list');
        let bookCard = document.createElement('div');
        bookCard.classList.add('book');
        bookList.appendChild(bookCard);
    
        let bookTitle = document.createElement('h1');
        bookTitle.classList.add('book-title', 'book-details');
        bookTitle.innerHTML = library[i].title;
        bookCard.appendChild(bookTitle);
    
        let bookAuthor = document.createElement('h2');
        bookAuthor.classList.add('book-author', 'book-details');
        bookAuthor.innerHTML = library[i].author;
        bookCard.appendChild(bookAuthor);
    
        let bookPages = document.createElement('h2');
        bookPages.classList.add('book-pages', 'book-details');
        bookPages.innerHTML = library[i].pages;
        bookCard.appendChild(bookPages);
    
        let readCheckerContainer = document.createElement('div');
        readCheckerContainer.classList.add('read-checker-container');
        let readCheckerLabel = document.createElement('label');
        readCheckerLabel.setAttribute('for', 'read-status-checker');
        readCheckerLabel.classList.add('checker');
        let readCheckerInput = document.createElement('input');
        readCheckerInput.classList.add('read-status-checkbox');
        readCheckerInput.setAttribute('type', 'checkbox');
        readCheckerInput.setAttribute('name', 'read-status-checker');
        readCheckerInput.setAttribute('id', 'read-status-checker');
        readCheckerContainer.appendChild(readCheckerInput);
        bookCard.appendChild(readCheckerContainer);
        let removeBookButton = document.createElement('button')
        removeBookButton.classList.add('remove-book-button');
        removeBookButton.innerHTML = 'Remove';
        bookCard.appendChild(removeBookButton);
    }
}

newBookButton.addEventListener('click', () => {
    modal.showModal();
})

submitBookButton.addEventListener('click', () => {
    modal.close();
})
  
let library = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.readStatus = function() {

}

Book.prototype.removeBook = function() {

}
  
function addBookToLibrary() {
    newBookForm.addEventListener('submit', function(event) {
        library = [];
        event.preventDefault();
        let bookTitleValue = event.currentTarget.title.value;
        let bookAuthorValue = 'By ' + event.currentTarget.author.value;
        let bookPagesValue = event.currentTarget.pages.value + ' pages';
        let bookReadStatusValue = event.currentTarget.checkbox.checked;

        library.push(new Book(bookTitleValue, bookAuthorValue, bookPagesValue))
        displayBooks();

        if (bookReadStatusValue === true) {
            // make styling for checkbox:checked::after - there should be content of 'Read', a background color of #bfbfbf, and color of black.
        } else {
            // keep doing the normal stuff with text content, checkbox::after and no unchecked - content of 'Not Read' 
        }
    })
}

addBookToLibrary();

