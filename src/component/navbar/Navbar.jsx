import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Works', path: '/projectsAll' },
  { label: 'About', path: '/allAboutMe' },
  { label: 'Contact', path: '/formContact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <div
        className="Navbar"
        style={scrolled ? { boxShadow: '0 4px 30px rgba(142,0,255,0.15)' } : {}}
      >
        {/* Logo */}
        <div className="logo">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <p>
              <span className="bracket">&lt;</span>
              Portfolio
              <span className="bracket"> /&gt;</span>
            </p>
          </Link>
        </div>

        {/* Hamburger */}
        <div
          className={`bar ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaXmark /> : <FaBarsStaggered />}
        </div>

        {/* Links */}
        <div className={`links ${menuOpen ? 'open' : ''}`}>
          <ul className="linksul">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={isActive(link.path) ? 'active-link' : ''}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile overlay - closes menu when clicking outside */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            top: '68px',
            background: 'rgba(0,0,0,0.5)',
            zIndex: 9997,
            backdropFilter: 'blur(2px)',
          }}
        />
      )}
    </>
  );
};

export default Navbar;