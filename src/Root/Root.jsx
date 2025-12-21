import React from 'react';
import Navbar from '../components/navBar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/footer/Footer';

const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <main className='min-h-[calc(100vh-316px)] max-w-full mx-auto p-3 md:px-7'>
                <Outlet />
            </main>
            <Footer></Footer>
            
        </>
    );
};

export default Root;