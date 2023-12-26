const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
  // write your code here
	if (library && library.books && Array.isArray(library.books)) {
    // Use reduce to count the number of books with readingStatus true
    const numberOfReadBooks = library.books.reduce((count, book) => {
      return count + (book.readingStatus ? 1 : 0);
    }, 0);

    return numberOfReadBooks;
  } else {
    // Handle the case where the library is not properly defined
    console.error("Invalid library object");
    return 0;
  }
};

// Do not change the code below

alert(numberOfBooksRead());
