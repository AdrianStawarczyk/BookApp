// opisuję sobie html w js.
const bookForm = document.getElementById('bookForm');
const bookContainer = document.querySelector('.books');
const nameInput = bookForm['name'];
const authorInput = bookForm['author'];
const priorityInput = bookForm['priority'];
const bookList = bookForm['category'];

const books = JSON.parse(localStorage.getItem("books")) || []; // JSON.parse zaminia nam stringa w co chcemy <np. []>

const addBook = (name, author, priority, category) => {
  books.push({
    name,
    author,
    priority,
    category
  });

  localStorage.setItem("books", JSON.stringify(books));  //zmieniamy obiek w stringa

  return {name, author, priority, category};
};

const createBookElement = ({name, author, priority, category}) =>{
  //tworzę sobie elementy
  const bookDiv = document.createElement("div");
  const bookName = document.createElement("p");
  const bookAuthor = document.createElement("p");
  const bookPriority = document.createElement("p");
  const bookCategory = document.createElement("p");


  bookName.innerText = "Book name: " + name;
  bookAuthor.innerText = "Book author: " + author;
  bookPriority.innerText= "Priority of reading: " + priority;
  bookCategory.innerText= "Category: " + category;

  bookDiv.append(bookName, bookAuthor, bookPriority, bookCategory);
  bookContainer.appendChild(bookDiv);
};

books.forEach(createBookElement);

bookForm.onsubmit = e => {
  e.preventDefault(); //nie refreszuje strony, zapobiega domyślnemu ustawieniu strony !!

  const newBook = addBook(
    nameInput.value,
    authorInput.value,
    priorityInput.value,
    bookList.value
  );

  createBookElement(newBook);

  nameInput.value = "";
  authorInput.value = "";
  priorityInput.value = "";
  bookList.value = "";
};
