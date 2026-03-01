import React from 'react';
import { FaGithub, FaLinkedin, FaFacebookSquare, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{
      background: "rgba(20, 22, 27, 0.95)",
      borderTop: "1px solid rgba(142, 0, 255, 0.25)",
      padding: "50px 0 20px",
      marginTop: "60px"
    }}>
      <div className="container">
        <div className="row g-4 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>

          {/* Brand */}
          <div className="col-md-4">
            <h5 style={{
              fontFamily: "'Fira Code', monospace",
              fontSize: "1.1rem",
              color: "white",
              marginBottom: "12px"
            }}>
              <span style={{ color: "#8e00ff" }}>&lt;</span>
              Mohamed Ibrahim
              <span style={{ color: "#8e00ff" }}> /&gt;</span>
            </h5>
            <p style={{ color: "#9aa3b0", fontSize: "14px", lineHeight: "1.8" }}>
              Frontend Developer specializing in React.js & Next.js. Building clean, performant, and user-friendly interfaces.
            </p>
            <div className="d-flex gap-3 mt-3">
              {[
                { href: "https://github.com/mosala123", icon: <FaGithub />, hoverColor: "#fff" },
                { href: "https://www.linkedin.com/in/mohamed-ibrahim-a98b483a6/", icon: <FaLinkedin />, hoverColor: "#0077b5" },
                { href: "#", icon: <FaFacebookSquare />, hoverColor: "#1877f2" },
              ].map((social, i) => (
                <a key={i} href={social.href} target={social.href !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{ color: "#9aa3b0", fontSize: "20px", transition: "color 0.3s, transform 0.3s", display: "inline-block" }}
                  onMouseEnter={e => { e.currentTarget.style.color = social.hoverColor; e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "#9aa3b0"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h6 style={{ color: "white", fontWeight: "700", marginBottom: "16px", fontSize: "13px", letterSpacing: "1.5px", textTransform: "uppercase" }}>
              Quick Links
            </h6>
            <div className="d-flex flex-column gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "Projects", path: "/projectsAll" },
                { label: "About Me", path: "/allAboutMe" },
                { label: "Contact", path: "/formContact" },
              ].map((link) => (
                <Link key={link.path} to={link.path} style={{ color: "#9aa3b0", textDecoration: "none", fontSize: "14px", transition: "all 0.3s", display: "inline-flex", alignItems: "center", gap: "8px" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "#c778dd"; e.currentTarget.style.paddingLeft = "6px"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "#9aa3b0"; e.currentTarget.style.paddingLeft = "0"; }}>
                  <span style={{ color: "#8e00ff", fontSize: "12px" }}>→</span> {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="col-md-4">
            <h6 style={{ color: "white", fontWeight: "700", marginBottom: "16px", fontSize: "13px", letterSpacing: "1.5px", textTransform: "uppercase" }}>
              Get In Touch
            </h6>
            <div className="d-flex flex-column gap-3">
              <a href="mailto:elmosalah74@gmail.com"
                style={{ color: "#9aa3b0", textDecoration: "none", fontSize: "14px", transition: "color 0.3s", display: "flex", alignItems: "center", gap: "10px" }}
                onMouseEnter={e => e.currentTarget.style.color = "#c778dd"}
                onMouseLeave={e => e.currentTarget.style.color = "#9aa3b0"}>
                <span style={{ color: "#8e00ff" }}><FaEnvelope /></span>
                elmosalah74@gmail.com
              </a>
              <a href="tel:+201024668770"
                style={{ color: "#9aa3b0", textDecoration: "none", fontSize: "14px", transition: "color 0.3s", display: "flex", alignItems: "center", gap: "10px" }}
                onMouseEnter={e => e.currentTarget.style.color = "#c778dd"}
                onMouseLeave={e => e.currentTarget.style.color = "#9aa3b0"}>
                <span style={{ color: "#8e00ff" }}><FaPhone /></span>
                +20 102 466 8770
              </a>
              <a href="https://www.linkedin.com/in/mohamed-ibrahim-a98b483a6/" target="_blank" rel="noopener noreferrer"
                style={{ color: "#9aa3b0", textDecoration: "none", fontSize: "14px", transition: "color 0.3s", display: "flex", alignItems: "center", gap: "10px" }}
                onMouseEnter={e => e.currentTarget.style.color = "#0077b5"}
                onMouseLeave={e => e.currentTarget.style.color = "#9aa3b0"}>
                <span style={{ color: "#8e00ff" }}><FaLinkedin /></span>
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pt-4 gap-2">
          <small style={{ color: "#555" }}>© 2025 Mohamed Ibrahim Salah. All rights reserved.</small>
          <small style={{ color: "#555" }}>
            Built with <span style={{ color: "#8e00ff", fontFamily: "'Fira Code', monospace" }}>React.js</span> & <span style={{ color: "#c778dd" }}>♥</span>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;