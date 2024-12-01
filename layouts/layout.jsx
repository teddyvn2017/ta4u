import React from 'react';
import { Outlet } from 'react-router-dom'; // Outlet là nơi render các trang con
import Header from '/components/header';
import Footer from '/components/footer';


const Layout = () => {
    return (
        <div className='container max-w-7xl mx-auto'>
            <Header />
                <main>
                    <Outlet /> {/* Outlet hiển thị nội dung các route con */}
                </main>
            <Footer />
        </div>
    );
  };


export default Layout;  