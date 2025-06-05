import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/src/assets/school-logo.jpg" alt="School Logo" />
        <span>SJ School</span>
      </div>
      <ul className="nav-links">
        <Link to= '/home'> Home</Link>
        <Link to= '/about'> About</Link>
        <Link to= '/login'> Login</Link>
        <Link to= '/contact'> Contact</Link>
        {/* <li><a href="about">About</a></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;

