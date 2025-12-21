import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadBook from "./readList/ReadBook";
import { getStoredBooks } from "./readList/readList";
import { getStoredWishListBooks } from "./HomePages/WishList/wishList";
import WishBook from "./HomePages/WishList/WishBook";
import PagesToRead from "./PagesToRead";


const ListedBooks = () => {

    const [myReadBooks, setMyReadBooks] = useState([]);
    const [myWishBooks, setMyWishBooks] = useState([]);
    const [mySortBooks, setMySortBooks] = useState("");
  

    const sortHandler = (type) => {
        setMySortBooks(type)
        if (type === "pages") {
            setMyReadBooks([...myReadBooks].sort((a,b) => a.totalPages - b.totalPages))
            setMyWishBooks([...myWishBooks].sort((a,b) => a.totalPages - b.totalPages))
        }
        if (type === "rating") {
             setMyReadBooks([...myReadBooks].sort((a,b) => a.rating - b.rating))
             setMyWishBooks([...myWishBooks].sort((a,b) => a.rating - b.rating))
        }
        
    }
    
    
    const data = useLoaderData();
    useEffect(() => {
        const getBooksData = getStoredBooks();
        const getBooks = getBooksData.map(id => parseInt(id));
        const myGetBooksData = data.filter(book => getBooks.includes(book.bookId))
        setMyReadBooks(myGetBooksData)
        
    }, [])

        useEffect(() => {
        const getBooksData = getStoredWishListBooks();
        const getBooks = getBooksData.map(id => parseInt(id));
        const myGetBooksData = data.filter(book => getBooks.includes(book.bookId))
        setMyWishBooks(myGetBooksData)
        
    }, [])
    
  return (
    <div className="max-w-7xl mx-auto">
      <div className="hero bg-[#f3f3f3] rounded-lg h-48 my-5">
        <h1 className="text-5xl font-bold">Books</h1>
      </div>

      <div className="flex justify-center items-center">
        <div className="dropdown dropdown-start">
          <div
            tabindex="0"
            role="button"
            className="btn m-1 bg-[#23BE0A] text-white mb-10 px-8 text-base"
          >
            Sort By {mySortBooks ? mySortBooks : <IoIosArrowDown />}
            
          </div>
          <ul
            tabindex="0"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => sortHandler("pages")}>
              <a>Pages</a>
            </li>
            <li onClick={() => sortHandler("rating")}>
              <a>Rating</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            {
                myReadBooks.map((book => <ReadBook key={book.bookId} book={book}></ReadBook>))
            }
          </TabPanel>
          <TabPanel>
            {
                myWishBooks.map((book => <WishBook key={book.bookId} book={book}></WishBook>))
            }
          </TabPanel>
        </Tabs>
      </div>
      {/* <PagesToRead myReadBooks={myReadBooks}></PagesToRead> */}
    </div>
  );
   
};

export default ListedBooks;
