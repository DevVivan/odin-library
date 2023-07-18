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
    let bookCard = document.createElement('div');
    bookCard.classList.add('book');
    document.querySelector('.book-list').appendChild(bookCard)
}
