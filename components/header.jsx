// Header.jsx
import React from 'react';


const Header = () => {
  return (
    <header className="header">
        <div className="header-container py-4 mx-auto flex flex-row w-full justify-between">
            <div className="logo">
                <a href="/">TA4U</a>
            </div>
            <nav className="nav">
                <ul className='flex flex-row gap-4'>
                    <li><a href="#home">Trang chủ</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
  );
};

export default Header;
