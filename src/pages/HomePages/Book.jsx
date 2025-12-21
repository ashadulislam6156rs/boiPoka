import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ oneBook }) => {
    // console.log(oneBook);
    const { image,bookName,category,publisher,author,rating,tags,bookId} = oneBook;

  return (
    <Link to={`bookdetails/${bookId}`}>
      <div className="cursor-pointer card bg-base-100 w-full shadow-sm p-5 border-2 border-[#13131340] font-WorkSans hover:shadow-lg">
      <figure className="bg-[#F3F3F3] h-60 rounded-md">
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
          <div className="space-y-2 mt-3">
              
              <div className="flex justify-start gap-15 items-center text-center pt-2">
          <span className="text-[#23BE0A] bg-[#23BE0A15] rounded-full py-1 px-3">{tags[0]}</span>
          <span className="text-[#23BE0A] bg-[#23BE0A15] rounded-full py-1 px-3 ">{tags[1]}</span>
              </div>
              <div className="py-3 space-y-3 border-b-2 border-dashed border-b-[#13131325]">
          <h2 className="card-title font-Playfair text-[#131313] font-bold text-2xl">{bookName}</h2>
          <p className="text-[#131313] text-base font-medium">By : <span>{author}</span></p>
        </div>
        <div className=" py-2 border-b-2 border-dashed border-b-[#13131325]">
          <h1 className="text-[#131313] text-base font-medium">Publisher By : <span>{publisher}</span></h1>

        </div>
              <div className="flex justify-between items-center">
          <h1 className="text-[#131313] text-base font-medium">{category}</h1>
                  <p className="flex gap-2 items-center text-[#131313] text-base font-medium">
                      {rating}
                      <FaStarHalfAlt/>
                  </p>
              </div>
      </div>
    </div>
    </Link>
  );
};

export default Book;
