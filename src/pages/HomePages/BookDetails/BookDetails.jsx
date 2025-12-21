
// import { FaStarHalfAlt } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router';
import { setStoredBooks } from '../../readList/readList';
import { setStoredWishListBooks } from '../WishList/wishList';

const BookDetails = () => {
    const {id} = useParams();
    const ID = parseInt(id);
    const oneBook = useLoaderData();
    
    const ListedBook = oneBook.find(book => book.bookId === ID)
    
    
    const { image, bookName, category, publisher, author, rating, tags,review,totalPages,yearOfPublishing } = ListedBook;
    // console.log(ListedBook);
   
    const setAddReadBook = (id) => {
        setStoredBooks(id)
       
    }
    const setWishListBook = (id) => {
        setStoredWishListBooks(id)
       
   }
    
  
    
    return (
        <>
            <div className=" bg-base-100 p-3 lg:p-10 my-10 font-WorkSans hover:shadow-lg flex flex-col md:flex-row  gap-10 rounded-lg">
                 <figure className="bg-[#F3F3F3] rounded-md flex-1 justify-center md:items-center flex p-10 lg:p-20">
                   <img className='h-60 md:h-[450px]'
                     src={image}
                     alt="Shoes"
                   />
                 </figure>
                <div className="space-y-2 flex-1">
                     <div className="py-3 space-y-3 border-b border-b-[#13131325]">
                     <h2 className="card-title font-Playfair text-[#131313] font-bold text-xl md:text-2xl">{bookName}</h2>
                     <p className="text-[#131313] text-base font-medium">By : <span>{author}</span></p>
                    </div>
                    <div className='border-b border-b-[#13131325] py-2'>
                        <h1 className="text-[#131313] text-base font-medium">{category}</h1>
                    </div>
                    <div className='border-b border-b-[#13131325] py-2'>
                        <p className='text-[#131313] text-base font-medium'>Review: <span className='text-sm text-[#13131380]'>{review}</span></p>
                         <div className="flex justify-start gap-2 md:gap-5 lg:gap-7 items-center text-center py-4">
                        <span className='text-[#131313] tex-xl font-semibold'>Tag</span>
                     <span className="text-xs md:text-base text-[#23BE0A] bg-[#23BE0A15] rounded-full py-1 px-3">#{tags[0]}</span>
                     <span className="text-xs md:text-base text-[#23BE0A] bg-[#23BE0A15] rounded-full py-1 px-3 ">#{tags[1]}</span>
                         </div>
                    </div>
          
                    <div className='space-y-3 py-3'>
                        <p className="text-[#13131370] text-base md:text-xl font-medium">Number of Pages: <span className='text-[#131313] md:ml-5'>{totalPages}</span></p><p className="text-[#13131370] text-sm md:text-xl font-medium">Publisher: <span className='text-[#131313] md:ml-5'>{publisher}</span></p><p className="text-[#13131370] text-base md:text-xl font-medium">Year of Publishing: <span className='text-[#131313] md:ml-5'>{yearOfPublishing}</span></p><p className="text-[#13131370] text-base md:text-xl font-medium">Rating: <span className='text-[#131313] md:ml-5'>{rating}</span></p>
                    </div>
                    <div className='flex gap-5 md:gap-15 items-center'>
                        <button onClick={() => setAddReadBook(ID)} class="btn btn-outline">Read</button>
                        <button onClick={() => setWishListBook(ID)} className="btn btn-secondary">Wishlist</button>
                    </div>
                 </div>
               </div>
        </>
         
    );
};

export default BookDetails;