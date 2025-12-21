import React from 'react';
import bannerImg from "../../assets/pngwing 1.png";

const Banner = () => {
    return (
        <div className='flex md:flex-row flex-col-reverse md:justify-center md:gap-30 gap-5 md:items-center bg-[#f3f3f3] rounded-3xl my-5 md:my-10 py-7 md:py-15 md:px-10 max-w-7xl mx-auto'>
            <div className='space-y-5 md:space-y-10 ml-10 md:ml-0'>
                <h1 className='text-3xl lg:text-5xl font-bold font-Playfair w-[300px] lg:w-[450px] leading-10 md:leading-18'>Books to freshen up your bookshelf</h1>
                <button className="btn bg-[#23BE0A] text-white font-medium text-base" >View The List</button>
            </div>
            <div className='w-[200px] md:w-auto ml-10 md:ml-0 '>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;