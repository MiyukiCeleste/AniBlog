import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/AniBlog.svg';
import '../pages/Hero';
import '../pages/About';
import '../pages/Contact';
import './Navbar.css';

import Menu from '../assets/navicons/menu.svg';
import Menu2 from '../assets/navicons/menu2.svg';
import Cancel from '../assets/navicons/cancel.svg';

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const showSidebar = () => setIsSidebarOpen(true);
  const hideSidebar = () => setIsSidebarOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return() => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <div className='leftside'>
          <button onClick={hideSidebar}>
            <img src={Cancel} />
          </button>
          <img src={Logo} />
        </div>
        <div className='rightside'>
          <Link className='link' to='/home'>Home</Link>
          <Link className='link' to='/browse'>Browse</Link>
          <Link className='link' to='/about'>About</Link>
          <Link className='link' to='/contact'>Contact</Link>
        </div>
      </div>
      <div className='leftside'>
        <img src={Logo} />
      </div>
      <div className='rightside'>
        <Link className='link hideOnMobile' to='/home'>Home</Link>
        <Link className='link hideOnMobile' to='/browse'>Browse</Link>
        <Link className='link hideOnMobile' to='/about'>About</Link>
        <Link className='link hideOnMobile' to='/contact'>Contact</Link>
        <button onClick={showSidebar} className='menu'>
          {scrolled ? (<img src={Menu} />) : (<img src={Menu2} />)}
        </button>
      </div>
    </nav>
  )
}

export default Navbar;
