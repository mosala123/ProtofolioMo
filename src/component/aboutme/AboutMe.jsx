import React from 'react';
import imageme from "../../../public/images/Image (3).png"
import { Link } from 'react-router-dom';
import "../projects/Projects.css"

const AboutMe = () => {
  return (
    <div className="container text-light py-5" style={{ minHeight: "80vh", display: "flex", alignItems: "center" }}>
      <div className="row align-items-center g-5 w-100">

        {/* Image */}
        <div className="col-md-5 text-center order-md-1 order-2">
          <div style={{ position: "relative", display: "inline-block" }}>
            <div style={{
              position: "absolute",
              top: "-10px", left: "-10px", right: "10px", bottom: "10px",
              border: "2px solid rgba(142,0,255,0.3)",
              borderRadius: "16px",
              zIndex: 0
            }}></div>
            <img
              src={imageme}
              alt="Mohamed Ibrahim"
              className="img-fluid"
              style={{
                borderRadius: "12px",
                borderBottom: "3px solid #c778dd",
                position: "relative",
                zIndex: 1,
                maxHeight: "450px",
                objectFit: "cover"
              }}
            />
          </div>
        </div>

        {/* Text */}
        <div className="col-md-7 order-md-2 order-1">
          <div className='d-flex align-items-center gap-3 mb-3'>
            <h2 className="mb-0 fw-bold">About Me</h2>
            <div style={{ flex: 1, maxWidth: "200px", height: "1px", background: "linear-gradient(90deg, #8e00ff, transparent)" }}></div>
          </div>

          <h3 style={{ color: "#c778dd", fontWeight: "700", marginBottom: "20px", fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)" }}>
            Mohamed Ibrahim Salah
          </h3>

          <p style={{ color: "#ccc", lineHeight: "1.9", fontSize: "16px", marginBottom: "16px" }}>
            Hello there! I'm a passionate web developer with a strong focus on building dynamic and user-friendly applications using React.js and other modern technologies. I love turning ideas into reality through clean, efficient, and scalable code.
          </p>

          <p style={{ color: "#ccc", lineHeight: "1.9", fontSize: "16px", marginBottom: "24px" }}>
            Over the past <strong style={{ color: "#8e00ff" }}>3+ years</strong>, I've worked on various projects ranging from small business websites to complex web applications. I continuously strive to stay up to date with the latest trends in web development.
          </p>

          <Link to="/allAboutMe" className="btn px-4 py-2" style={{
            background: "transparent",
            border: "2px solid #8e00ff",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
            transition: "background 0.3s"
          }}
            onMouseEnter={e => e.currentTarget.style.background = "#8e00ff"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;