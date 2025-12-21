import React from 'react';
import Book from './Book';

const Books = ({ data }) => {
    
    return (
        <>
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-2xl md:text-4xl font-bold text-center py-5 md:py-10'>Books</h1>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 pb-10'>
                    {data.map((oneBook) => <Book key={oneBook.bookId} oneBook={oneBook}></Book>)}
                </div>
            </div>
            
        </>
    );
};

export default Books;