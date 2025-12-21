const getStoredWishListBooks = () => {
  const getBooks = localStorage.getItem("wishList");
  if (getBooks) {
    const getBooksData = JSON.parse(getBooks);
    return getBooksData;
  } else {
    return [];
  }
};

const setStoredWishListBooks = (id) => {
    const BooksData = getStoredWishListBooks();
    if (BooksData.includes(id)) {
        alert("this wishList id already exist.")
        return 0;
       
    }
    else {
        BooksData.push(id);
        const data = JSON.stringify(BooksData);
        localStorage.setItem("wishList",data);

    }
};
export { getStoredWishListBooks,setStoredWishListBooks };
