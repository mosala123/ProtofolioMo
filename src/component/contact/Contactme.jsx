import React from 'react'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa'

const Contactme = () => {
  return (
    <div className='container text-light pb-5' style={{ marginTop: "80px" }}>

      <div className='d-flex align-items-center gap-3 mb-2'>
        <h2 className="mb-0 fw-bold">Contact</h2>
        <div style={{ flex: 1, maxWidth: "200px", height: "1px", background: "linear-gradient(90deg, #8e00ff, transparent)" }}></div>
      </div>
      <p style={{ color: "#8e00ff", fontFamily: "'Fira Code', monospace", fontSize: "14px", marginBottom: "30px" }}>
        // Let's work together
      </p>

      <div className='row g-4'>

        {/* Left */}
        <div className="col-lg-7 col-md-12">
          <p style={{ color: "#ccc", fontSize: "16px", lineHeight: "1.9", maxWidth: "560px", marginBottom: "24px" }}>
            I'm interested in freelance opportunities and full-time positions. Whether it's a small project or a long-term collaboration, I'm always excited to take on new challenges and bring ideas to life. Don't hesitate to reach out!
          </p>
          <Link to="/formContact" className="btn px-4 py-2" style={{
            background: "#8e00ff",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
            border: "2px solid #8e00ff",
            transition: "all 0.3s"
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "transparent"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#8e00ff"; }}
          >
            Send Message
          </Link>
        </div>

        {/* Right */}
        <div className="col-lg-5 col-md-12">
          <div style={{
            background: "rgba(142,0,255,0.06)",
            border: "1px solid rgba(142,0,255,0.3)",
            borderRadius: "16px",
            padding: "28px"
          }}>
            <h5 style={{ color: "white", marginBottom: "20px", fontWeight: "600" }}>Get in touch</h5>

            <div className="d-flex flex-column gap-3">
              <a href="mailto:elmosalah74@gmail.com" className="d-flex align-items-center gap-3" style={{ color: "#ccc", textDecoration: "none", fontSize: "15px", transition: "color 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#8e00ff"}
                onMouseLeave={e => e.currentTarget.style.color = "#ccc"}
              >
                <div style={{ width: "38px", height: "38px", background: "rgba(142,0,255,0.2)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <FaEnvelope style={{ color: "#8e00ff" }} />
                </div>
                elmosalah74@gmail.com
              </a>

              <a href="tel:+201024668770" className="d-flex align-items-center gap-3" style={{ color: "#ccc", textDecoration: "none", fontSize: "15px", transition: "color 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#8e00ff"}
                onMouseLeave={e => e.currentTarget.style.color = "#ccc"}
              >
                <div style={{ width: "38px", height: "38px", background: "rgba(142,0,255,0.2)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <FaPhone style={{ color: "#8e00ff" }} />
                </div>
                +20 102 466 8770
              </a>

              <a href="https://github.com/mosala123" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center gap-3" style={{ color: "#ccc", textDecoration: "none", fontSize: "15px", transition: "color 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#8e00ff"}
                onMouseLeave={e => e.currentTarget.style.color = "#ccc"}
              >
                <div style={{ width: "38px", height: "38px", background: "rgba(142,0,255,0.2)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <FaGithub style={{ color: "#8e00ff" }} />
                </div>
                github.com/mosala123
              </a>

              <a href="https://www.linkedin.com/in/mohamed-ibrahim-1a6a9131b" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center gap-3" style={{ color: "#ccc", textDecoration: "none", fontSize: "15px", transition: "color 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#0077b5"}
                onMouseLeave={e => e.currentTarget.style.color = "#ccc"}
              >
                <div style={{ width: "38px", height: "38px", background: "rgba(142,0,255,0.2)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <FaLinkedin style={{ color: "#8e00ff" }} />
                </div>
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactme