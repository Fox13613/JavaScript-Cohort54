

function createBookList(books) {
  const ul = document.createElement("ul");
  books.forEach((book, i) => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = `${book.title} by ${book.author}`;
    li.appendChild(p);
    book.image = book.title.toLowerCase().replace(/ /g, "_") + ".jpg";
    const img = document.createElement("img");
    img.src = `./assets/${book.image}`;
    img.alt = book.title;
    li.appendChild(img);
    li.style.backgroundColor = book.alreadyRead ? "green" : "red";
    ul.appendChild(li);
  });
  return ul;
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
