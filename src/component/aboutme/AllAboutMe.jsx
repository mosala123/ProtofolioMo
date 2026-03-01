import React from 'react'
import SkilsMe from '../skils/SkilsMe'
import Timeline from '../timeline/Timeline'
import imageme from "../../../public/images/Image (3).png"
import { Link } from 'react-router-dom';
import Backpage from '../Backpage';
import { FaMapMarkerAlt, FaBriefcase, FaCode } from 'react-icons/fa';
import "../projects/Projects.css"

const AllAboutMe = () => {
  return (
    <div>
      {/* Hero About Section */}
      <div className="container pb-5 px-3 text-light" style={{ paddingTop: "110px", minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div className="row align-items-center g-5 w-100">

          {/* Text */}
          <div className="col-md-6">
            <div className="d-flex align-items-center gap-3 mb-3">
              <h2 className="mb-0 fw-bold">About Me</h2>
              <div style={{ flex: 1, maxWidth: "200px", height: "1px", background: "linear-gradient(90deg, #8e00ff, transparent)" }}></div>
            </div>

            <h1 style={{ color: "#c778dd", fontWeight: "700", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", marginBottom: "24px" }}>
              I'm a Frontend React Developer
            </h1>

            {/* Info badges */}
            <div className="d-flex flex-wrap gap-2 mb-4">
              <span style={{ background: "rgba(142,0,255,0.15)", border: "1px solid rgba(142,0,255,0.4)", color: "#c778dd", padding: "6px 14px", borderRadius: "20px", fontSize: "13px" }}>
                <FaMapMarkerAlt style={{ marginRight: "6px" }} />El Mahalla El Kubra, Egypt
              </span>
              <span style={{ background: "rgba(142,0,255,0.15)", border: "1px solid rgba(142,0,255,0.4)", color: "#c778dd", padding: "6px 14px", borderRadius: "20px", fontSize: "13px" }}>
                <FaBriefcase style={{ marginRight: "6px" }} />Open to Full-time & Freelance
              </span>
              <span style={{ background: "rgba(142,0,255,0.15)", border: "1px solid rgba(142,0,255,0.4)", color: "#c778dd", padding: "6px 14px", borderRadius: "20px", fontSize: "13px" }}>
                <FaCode style={{ marginRight: "6px" }} />3+ Years Experience
              </span>
            </div>

            <div style={{ letterSpacing: "0.3px", fontWeight: "400", fontSize: "16px", lineHeight: "1.9", color: "#ccc" }}>
              <p>Hello! I'm <strong style={{ color: "white" }}>Mohamed Ibrahim Salah</strong>, a passionate Front-End Developer based in El Mahalla El Kubra, Egypt. I specialize in building modern, interactive web applications using React.js and strive to enhance user experience through clean and efficient code.</p>

              <p>With over <strong style={{ color: "#8e00ff" }}>3 years of experience</strong>, I've worked on various individual and collaborative projects, primarily focusing on React.js. My goal is to continuously grow my skills and create high-quality, user-friendly interfaces.</p>

              <p>I'm dedicated to learning new technologies and constantly improving my craft. In the near future, I aim to advance to a Senior Developer role and stay ahead of trends in the tech world.</p>

              <p>Outside of coding, I enjoy reading, traveling, and sports. I'm also an avid gamer and design enthusiast, and I love exploring different cultures and languages, which fuel my creativity.</p>
            </div>

            <Link to="/formContact" className="btn px-4 py-2 mt-3" style={{ background: "#8e00ff", color: "white", borderRadius: "8px", textDecoration: "none", fontWeight: "600", transition: "all 0.3s" }}
              onMouseEnter={e => e.target.style.background = "#6a00c0"}
              onMouseLeave={e => e.target.style.background = "#8e00ff"}
            >
              Contact Me
            </Link>
          </div>

          {/* Image */}
          <div className="col-md-6 text-center">
            <div style={{ position: "relative", display: "inline-block" }}>
              <div style={{
                position: "absolute",
                inset: "-10px",
                background: "linear-gradient(135deg, rgba(142,0,255,0.3), transparent 60%)",
                borderRadius: "20px",
                zIndex: 0
              }}></div>
              <img
                src={imageme}
                alt="Mohamed Ibrahim Salah"
                className="img-fluid"
                style={{
                  borderRadius: "16px",
                  borderBottom: "3px solid #c778dd",
                  position: "relative",
                  zIndex: 1,
                  maxHeight: "500px",
                  objectFit: "cover"
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Timeline + Stats */}
      <Timeline />

      {/* Skills */}
      <SkilsMe />
      <Backpage />
    </div>
  );
};

export default AllAboutMe;