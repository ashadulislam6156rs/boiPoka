const getStoredBooks = () => {
  const getBooks = localStorage.getItem("readList");
  if (getBooks) {
    const getBooksData = JSON.parse(getBooks);
    return getBooksData;
  } else {
    return [];
  }
};

const setStoredBooks = (id) => {
    const BooksData = getStoredBooks();
    if (BooksData.includes(id)) {
        alert("this id already exist.")
        return 0;
       
    }
    else {
        BooksData.push(id);
        const data = JSON.stringify(BooksData);
        localStorage.setItem("readList",data);

    }
};
export { setStoredBooks,getStoredBooks };
