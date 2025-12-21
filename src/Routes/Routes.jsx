import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import Home from '../pages/Home';
import Error from '../components/ErrorElement/Error';
import ListedBooks from '../pages/ListedBooks';
import PagesToRead from '../pages/PagesToRead';
import BookDetails from '../pages/HomePages/BookDetails/BookDetails';
import ReadBook from '../pages/readList/ReadBook';

const router = createBrowserRouter([
    {
        path: "/",
        errorElement:<Error></Error>,
        Component: Root,
        children: [
            {
                index: true,
                loader: () => fetch("../data/booksData.json"),
                path: "/",
                Component: Home,
            },
            {
                path: "/listedbooks",
                Component: ListedBooks,
                loader: () => fetch("../data/booksData.json"),
            },
            {
                path: "/pagestoread",
                loader: () => fetch("../data/booksData.json"),
                Component: PagesToRead,
            },
            {
                path: "/bookdetails/:id",
                loader: () => fetch("../data/booksData.json"),
                Component: BookDetails,
            },
            // {
            //     path: "/listedbooks/bookdetails/:id",
            //     Component: ReadBook,
            // }

        ]
    }
])

export default router;