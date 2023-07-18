const newBookButton = document.querySelector('.new-book-button')
const submitBookButton = document.querySelector('.submit-book-button')
const modal = document.querySelector('.modal');

newBookButton.addEventListener('click', () => {
    modal.showModal();
})

submitBookButton.addEventListener('click', () => {
    modal.close();
})

let library = [];

function Book() {

}
  
function addBookToLibrary() {

}