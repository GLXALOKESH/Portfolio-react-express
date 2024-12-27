import React from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation(); // Get the current path

  // Function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="comp-nav-nav">
      <div className="comp-nav-port">Portfolio</div>
      <ul>
        <li>
          <Link to="/projects" className={`nav-link- ${isActive('/projects') ? 'active' : ''}`}>
            Projects
            {isActive('/projects') && <div className="comp-nav-line"></div>}
          </Link>
        </li>
        <li>
          <Link to="/blog" className={`nav-link ${isActive('/blog') ? 'active' : ''}`}>
            Blog
            {isActive('/blog') && <div className="comp-nav-line"></div>}
          </Link>
        </li>
        <li>
          <Link to="/socials" className={`nav-link ${isActive('/socials') ? 'active' : ''}`}>
            Socials
            {isActive('/socials') && <div className="comp-nav-line"></div>}
          </Link>
        </li>
        <li>
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
            About
            {isActive('/') && <div className="comp-nav-line"></div>}
          </Link>
        </li>
        <li>
          <Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>
            Services
            {isActive('/services') && <div className="comp-nav-line"></div>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
