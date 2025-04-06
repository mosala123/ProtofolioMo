import React from 'react';
import { FaGithub, FaKey, FaDiscord } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 border-top border-secondary">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        
        {/* Left section */}
        <div className="text-center text-md-start mb-3 mb-md-0">
          <h5 className="fw-bold">Mohamed </h5>
          <Link to="/elmosalah74@gmail.com" className="text-light text-decoration-none d-block">
            elmosalah74@gmail.com
          </Link>
          <small>Front-end Developer React Js </small>
        </div>

        {/* Right section */}
        <div className="text-center text-md-end">
          <h6 className="fw-bold">Media</h6>
          <div className="d-flex justify-content-center justify-content-md-end gap-3 fs-4 mt-2">
            <Link  to="/https://github.com/mosala123" className="text-light footer"><FaGithub /></Link>
            <Link to="/https://www.linkedin.com/in/mohamed-ibrahim-1a6a9131b" className="text-light footer"><FaLinkedin /></Link>
            <Link to="/" className="text-light footer"><FaFacebookSquare /></Link>
          </div>
        </div>

      </div>

      <div className="text-center mt-4">
        <small>© Copyright 2025. Made by Mo Salah</small>
      </div>
    </footer>
  );
}

export default Footer;
