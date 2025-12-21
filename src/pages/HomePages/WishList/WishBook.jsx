import React from 'react';
import { FiUsers } from 'react-icons/fi';
import { RiFileChartLine } from 'react-icons/ri';
import { SlLocationPin } from 'react-icons/sl';
import { Link } from 'react-router';

const WishBook = ({book}) => {

    const { image, bookName, category, publisher, author, rating, tags,bookId,totalPages,yearOfPublishing } = book;
    return (
      <div className=" bg-base-100 p-5 mt-10 font-WorkSans hover:shadow-lg flex flex-col md:flex-row gap-10 rounded-lg border border-[#13131325]">
                       <figure className="bg-[#F3F3F3] rounded-md justify-center items-center flex p-3 sm:p-7 h-[350px] md:h-auto md:w-80">
                         <img  className='w-40 md:w-auto'
                           src={image}
                           alt="Shoes"
                         />
                       </figure>
                      <div className="space-y-2 w-full">
                           <div className="space-y-2">
                           <h2 className="card-title font-Playfair text-[#131313] font-bold text-xl">{bookName}</h2>
                           <p className="text-[#131313] text-base font-medium">By : <span>{author}</span></p>
                          </div>
                          <div>
                               <div className="flex flex-wrap justify-start lg:gap-15 gap-4 items-center text-center py-1">
                              <span className='text-[#131313] tex-xl font-semibold'>Tag</span>
                           <span className="text-[#23BE0A] bg-[#23BE0A15] rounded-full py-1 px-3">#{tags[0]}</span>
                              <span className="text-[#23BE0A] bg-[#23BE0A15] rounded-full py-1 px-3 ">#{tags[1]}</span>
                               <p className="md:hidden lg:flex text-[#13131370] text-sm md:text-base font-medium flex gap-1 items-center"><SlLocationPin />Year of Publishing: <span className='text-[#131313]'>{yearOfPublishing}</span></p>
                               </div>
                          </div>
                
                      <div className='space-y-2 flex flex-wrap gap-2 sm:gap-10 items-center'>
                          <p className="text-[#13131370] text-[10px] sm:text-sm md:text-base font-medium flex items-center gap-1"><FiUsers />Publisher: <span className='text-[#131313]'>{publisher}</span></p>
                          <p className="text-[#13131370] text-sm md:text-base font-medium flex items-center gap-1"><RiFileChartLine />Pages: <span className='text-[#131313]'>{totalPages}</span></p>
                         
                          </div>
                      <div className='flex flex-wrap lg:gap-15 gap-2 items-center border-t border-t-[#13131325] pt-2'>
                           <h1 className="text-[11px] lg:text-base font-medium text-[#328EFF] bg-[#328EFF15] rounded-full py-1 px-3">Category: <span className='text-[#131313]'>{category}</span></h1>
                               <p className="text-[11px] lg:text-base font-medium text-[#FFAC33] bg-[#FFAC3320] rounded-full py-1 px-3">Rating: <span className='text-[#131313]'>{rating}</span></p>
                              <Link to={`/listedbooks/bookdetails/${bookId}`} className="btn btn-secondary rounded-full">Viwe Details</Link>
                          </div>
                       </div>
                     </div>
    );
};

export default WishBook;