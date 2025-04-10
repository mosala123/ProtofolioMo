import React, { useState } from 'react';
import './Navbar.css';
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="Navbar">
      <div className="logo pt-3">
        <p className="fs-4">Protofolio</p>
      </div>

      <div className="bar" onClick={toggleMenu}>
        <FaBarsStaggered />
      </div>

      <div className={`links ${menuOpen ? 'open' : ''}`}>
        <ul className="linksul">
          <li><Link to="/protofolioME">Home</Link></li>
          <li><Link to="/protofolioME/ProjectsAll">Works</Link></li>
          <li><Link to="/protofolioME/AllAboutMe">About-Me</Link></li>
          <li><Link to="/protofolioME/FormContact">Contacts</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;