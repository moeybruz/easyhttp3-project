// Book Constructor
function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI(){}

//Add book to List
UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');
  // Create TR Element
  const row = document.createElement('tr');
  // Insert cols
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</a></td>
  `;

  list.appendChild(row);
}

// Show Alerts
UI.prototype.showAlert = function(message, className){
  // Create div
  const div = document.createElement('div');
  // Add classes
  div.className = `alert ${className}`;
  // Add Text
  div.appendChild(document.createTextNode(message));
  // Get Parent
  const container = document.querySelector('.container');
  // Get Form
  const form = document.querySelector('#book-form');
  // Insert Before
  container.insertBefore(div, form);
  // Timeout of 3 Seconds
  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 3000)
}

// Delete Book
UI.prototype.deleteBook = function(target){
  if(target.className === 'delete'){
    target.parentElement.parentElement.remove();
  }
}


// Clear Field
UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// LS Constructor
function Store(){}

// Fetch books
Store.prototype.getBooks = function(){
  let books;
    if(localStorage.getItem('books') === null){
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
}
// Display book from LS
Store.prototype.displayBooks = function(){
  
  const books = Store.getBooks();

  books.forEach(function(book){
    const ui = new UI;

    // Add book to UI
    ui.addBookToList(book);
  });
}
// Add books
Store.prototype.addBooks = function(book){
  
  const books = Store.getBooks();

  books.push(book);

  localStorage.setItem('books', JSON.stringify(books));
}
// Remove books
Store.prototype.removeBooks = function(isbn){
  
  const books = Store.getBooks();

  books.forEach(function(book, index){
    if(book.isbn === isbn){
      books.splice(index, 1)
    }
  });
  
  localStorage.setItem('books', JSON.stringify(books));
}

//------------------DOM Load Event----------------------------//

document.addEventListener('DOMContentLoaded', Store.displayBooks());


// Event listeners for adding book
document.getElementById('book-form').addEventListener('submit', function(e){
  // Get Form Values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

  // Instanciate Book
  const book = new Book(title, author, isbn);

  // Instanciate UI
  const ui = new UI();

  // Validation
  if(title === '' || author === '' || isbn === ''){
    // Error Alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
  // Add Book to LIST
    ui.addBookToList(book);

  // Add to local storage
    Store.addBooks(book);

  // Show Alert
    ui.showAlert('Book Added!', 'success');

  // Clear Field
    ui.clearFields();
  }

  e.preventDefault();
});

// Event Listener for Delete
document.getElementById('book-list').addEventListener('click', function(e){
  // Instanciate UI
  const ui = new UI();

  // Delete Book
  ui.deleteBook(e.target);

  // Remove from LS
  Store.removeBooks(e.target.parentElement.previousElementSibling.textContent);

  // Show message
  ui.showAlert('Book Removed!', 'success');

  e.preventDefault();
});