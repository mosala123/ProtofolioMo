import React from 'react'
import "./HomePages.css" // استيراد ملف CSS العادي
import imagesme from "../../../public/images/Image1.png"
import Projects from '../projects/Projects'
import SkilsMe from '../skils/SkilsMe'
import AboutMe from '../aboutme/AboutMe'
import Contactme from '../contact/Contactme'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa'
import { FaExternalLinkAlt } from 'react-icons/fa'

const techStack = [
  "React.js", "Next.js", "JavaScript", "TypeScript",
  "Bootstrap", "Redux", "Firebase", "REST API",
  "CSS3", "Git & GitHub", "Figma", "Appwrite",
];

const HomePages = () => {
  return (
    <div className='HomePages text-light'>

      {/* ===== HERO ===== */}
      <div className="container px-3">
        <section className="hero-section">
          <div className="row align-items-center justify-content-between w-100 g-5">

            {/* Left: Text */}
            <div className="col-lg-6 col-md-12">

              {/* Tag */}
              <div className="hero-tag">
                <span className="dot"></span>
                Available for opportunities
              </div>

              {/* Typewriter name */}
              <div className="typewriter">
                <h1>Mohamed Ibrahim Salah</h1>
              </div>

              {/* Headline - شكل الخط المحسن */}
              <h2 className="hero-headline">
                Building <span className="gradient-text">Modern</span> Web
                <br />Experiences with <span className="gradient-text">React.js</span>
              </h2>

              {/* Description */}
              <p className="hero-desc">
                Frontend Developer specializing in <strong style={{ color: "#c778dd" }}>React.js</strong> &{' '}
                <strong style={{ color: "#ffffff" }}>Next.js</strong>. I craft clean, performant, and user-friendly
                interfaces that bring ideas to life. Open to full-time & freelance opportunities.
              </p>

              {/* CTAs */}
              <div className="hero-ctas">
                <Link to="/formContact" className="btn-primary-hero">
                  Let's Work Together <FaExternalLinkAlt style={{ fontSize: "12px" }} />
                </Link>
                <Link to="/projectsAll" className="btn-secondary-hero">
                  View My Work <FaArrowDown style={{ fontSize: "12px" }} />
                </Link>
              </div>

              {/* Social */}
              <div className="hero-social">
                <a href="https://github.com/mosala123" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/mohamed-ibrahim-a98b483a6/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <FaLinkedin />
                </a>
                <div className="divider"></div>
                <span style={{ color: "#555", fontSize: "12px", fontFamily: "'Fira Code', monospace" }}>
                  elmosalah74@gmail.com
                </span>
              </div>
            </div>

            {/* Right: Image */}
            <div className="col-lg-5 col-md-12 hero-image-col">
              <div className="hero-img-wrapper">
                <div className="hero-img-glow"></div>
                <img src={imagesme} alt="Mohamed Ibrahim Salah" className="img-fluid" />
                <div className="status-badge">
                  <div className="status-dot"></div>
                  <span>Currently working on <strong>Portfolio</strong></span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ===== TECH STRIP ===== */}
      <div className="tech-strip">
        <div className="tech-strip-inner">
          {[...techStack, ...techStack].map((tech, i) => (
            <div key={i} className="tech-item">
              <span className="tech-dot"></span>
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* ===== QUOTE ===== */}
      <div className="container px-3">
        <div className="quote-container">
          <p>
            "With smooth scrolling comes — 'This isn't as smooth as a Treika pass! We need something better!'"
          </p>
          <div className="quote-author">— Mo.</div>
        </div>
      </div>

      {/* ===== SECTIONS ===== */}
      <div className="section-divider"></div>
      <Projects />
      <div className="section-divider"></div>
      <SkilsMe />
      <div className="section-divider"></div>
      <AboutMe />
      <div className="section-divider"></div>
      <Contactme />
    </div>
  )
}

export default HomePages