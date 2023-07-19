const newBookButton = document.querySelector('.new-book-button')
const submitBookButton = document.querySelector('.submit-book-button')
const modal = document.querySelector('.modal');

newBookButton.addEventListener('click', () => {
    modal.showModal();
})

submitBookButton.addEventListener('click', () => {
    modal.close();
})

let library = [
    new Book('Book 1', 'Author 1', '100 pages'),
    new Book('Book 2', 'Author 2', '100 pages'),
    new Book('Book 3', 'Author 3', '100 pages'),
];

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

}

for (let i = 0; i < library.length; i++) {
    const bookList = document.querySelector('.book-list');
    let bookCard = document.createElement('div');
    bookCard.classList.add('book');
    bookList.appendChild(bookCard);

    let bookTitle = document.createElement('h1');
    bookTitle.classList.add('book-title', 'book-details');
    bookTitle.textContent = library[i].title;
    bookCard.appendChild(bookTitle);

    let bookAuthor = document.createElement('h2');
    bookAuthor.classList.add('book-author', 'book-details');
    bookAuthor.textContent = library[i].author;
    bookCard.appendChild(bookAuthor);

    let bookPages = document.createElement('h2');
    bookPages.classList.add('book-pages', 'book-details');
    bookPages.textContent = library[i].pages;
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
