import React, { useEffect, useState } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { getStoredBooks } from "./readList/readList";
import { useLoaderData } from "react-router";

const PagesToRead = () => {
    const [readData, setReadData] = useState([]);
   
    // console.log(dataRead);
     const currentdata = useLoaderData();
    useEffect(() => {
        const getBooksData = getStoredBooks();
        const getBooks = getBooksData.map(id => parseInt(id));
        const myGetBooksData = currentdata.filter(book => getBooks.includes(book.bookId))
        setReadData(myGetBooksData)
        
    }, [])
    // console.log(readData);
    
    
    
  return (
    <div className="py-15">
      <BarChart width={700} height={300} data={readData}>
        <XAxis dataKey="bookId" />
              <YAxis />
              <Bar dataKey="yearOfPublishing" fill="#8884d8"
       />
      </BarChart>
    </div>
  );
};

export default PagesToRead;
