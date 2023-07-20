const newBookButton = document.querySelector('.new-book-button')
const submitBookButton = document.querySelector('.submit-book-button')
const modal = document.querySelector('.modal');
const newBookForm = document.querySelector('.book-form');

newBookButton.addEventListener('click', () => {
    modal.showModal();
})

submitBookButton.addEventListener('click', () => {
    modal.close();
})
  
let library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
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
            let readCheckerInput = document.createElement('button');
            
            readCheckerInput.addEventListener('click', () => {
                if (library[i] === 'Not Read') {
                    readCheckerInput.classList.remove('unread-styling')
                    readCheckerInput.classList.add('read-styling');
                    library[i] = 'Read';
                    readCheckerInput.innerHTML = library[i];
                } else {
                    readCheckerInput.classList.remove('read-styling')
                    readCheckerInput.classList.add('unread-styling');
                    library[i] = 'Not Read';
                    readCheckerInput.innerHTML = library[i];
                }
            })

            if (bookReadStatusValue === true) {
                readCheckerInput.classList.add('read-styling');
                library[i] = 'Read';
                readCheckerContainer.appendChild(readCheckerInput);
                bookCard.appendChild(readCheckerContainer);
            } else {
                readCheckerInput.classList.add('unread-styling');
                library[i] = 'Not Read';
                readCheckerContainer.appendChild(readCheckerInput);
                bookCard.appendChild(readCheckerContainer);
            }

            readCheckerInput.innerHTML = library[i];
            readCheckerContainer.appendChild(readCheckerInput);
            bookCard.appendChild(readCheckerContainer);
    
            let removeBookButton = document.createElement('button')
            removeBookButton.classList.add('remove-book-button');
            removeBookButton.innerHTML = 'Remove';
            bookCard.appendChild(removeBookButton);
        }
    })
}

addBookToLibrary();

