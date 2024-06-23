import React from 'react';
import './navbar.css'; // Import your CSS file for styling
import { Route, Routes, Link } from 'react-router-dom';
import Home from '../Home/Home'; 
import About from '../About/About';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className='navbar-nav'>
          <li className='nav-item logo'>
            <Link className='nav-link' to="/">Logo</Link>
          </li>
          <div className='links'>
            <li className='nav-item'>
              <Link className='nav-link' to="/Home">Home</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/About">About</Link>
            </li>
          </div>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
};

export default Navbar;
