import React from 'react'
import { FaLongArrowAltRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./Projects.css"

// Old project images
import rafiqa from "../../../public/images/reqia.jpg"
import wraether from "../../../public/images/wraether.jpg"
import producthub from "../../../public/images/producthub.jpg"

// Generated SVG thumbnails (place this file in src/component/projects/)
import {
  xhubThumb,
  footballThumb,
  myenglishThumb,
  flavorlandThumb,
  fixedcarThumb
} from './projectThumbnails.js'

const featuredProjects = [
  {
    title: "X-Hub",
    description: "A modern e-commerce platform built with Next.js. Product listings, cart management, and seamless shopping experience.",
    repository: "https://x-hub-eight.vercel.app/",
    github: "https://github.com/mosala123/x-hub",
    image: xhubThumb,
    tags: ["Next.js", "React", "CSS"],
    badge: "Next.js",
    badgeStyle: { bg: "rgba(255,255,255,0.08)", color: "#ffffff" }
  },
  {
    title: "Football App",
    description: "Live football scores, standings, and match details. Real-time sports data with smooth React interface.",
    repository: "https://football-blond.vercel.app/",
    github: "https://github.com/mosala123/football",
    image: footballThumb,
    tags: ["React.js", "Sports API", "Bootstrap"],
    badge: "React.js",
    badgeStyle: { bg: "rgba(97,218,251,0.1)", color: "#61DAFB" }
  },
  {
    title: "Invoices System",
    description: "Graduation project — full invoice management system with CRUD operations and professional dashboard.",
    repository: "https://invoices-2i8q.vercel.app/",
    github: "https://github.com/mosala123/invoices",
    image: null,
    tags: ["React.js", "Redux", "Firebase"],
    badge: "🎓 Graduation",
    badgeStyle: { bg: "rgba(255,215,0,0.1)", color: "#FFD700" }
  },
  {
    title: "Fixed Car",
    description: "Car maintenance & repair service platform. Browse services, book appointments, track your vehicle.",
    repository: "https://fixed-car.vercel.app/",
    github: "https://github.com/mosala123/fixed-car",
    image: fixedcarThumb,
    tags: ["React.js", "CSS", "Bootstrap"],
    badge: "React.js",
    badgeStyle: { bg: "rgba(97,218,251,0.1)", color: "#61DAFB" }
  },
  {
    title: "FlavorLand",
    description: "A rich food & recipe platform. Discover, filter and explore recipes from cuisines around the world.",
    repository: "#",
    github: "https://github.com/mosala123/FlavorLand",
    image: flavorlandThumb,
    tags: ["React.js", "API", "CSS"],
    badge: "React.js",
    badgeStyle: { bg: "rgba(97,218,251,0.1)", color: "#61DAFB" }
  },
  {
    title: "My English",
    description: "Interactive English learning platform with vocabulary, quizzes, and progress tracking.",
    repository: "#",
    github: "https://github.com/mosala123/my-english",
    image: myenglishThumb,
    tags: ["React.js", "CSS"],
    badge: "React.js",
    badgeStyle: { bg: "rgba(97,218,251,0.1)", color: "#61DAFB" }
  },
];

const Projects = () => {
  return (
    <div className='container Projects text-light px-3 mt-5 pb-5 pt-5' style={{ minHeight: "80vh" }}>

      <div className='mt-5 d-flex align-items-center justify-content-between flex-wrap gap-3'>
        <div className='d-flex align-items-center gap-3'>
          <h2 className="mb-0 fw-bold">Projects</h2>
          <div className="section-line"></div>
        </div>
        <Link to="/projectsAll" className="view-all-link">
          View all <FaLongArrowAltRight />
        </Link>
      </div>
      <p style={{ color: "#8e00ff", fontFamily: "'Fira Code', monospace", fontSize: "13px", marginTop: "6px" }}>
        // Featured work — {featuredProjects.length} projects
      </p>

      <div className="row mt-3 g-4">
        {featuredProjects.map((project, index) => (
          <div key={index} className='col-lg-4 col-md-6 col-12'>
            <div className="project-card">

              {/* Image / Thumbnail */}
              {project.image ? (
                <div className="img-wrapper">
                  <img src={project.image} alt={project.title} />
                  <div className="img-overlay">
                    {project.repository !== "#" && (
                      <a href={project.repository} className="overlay-btn" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt style={{ marginRight: "6px", fontSize: "11px" }} />Live Demo
                      </a>
                    )}
                    <a href={project.github} className="overlay-btn gh" target="_blank" rel="noopener noreferrer">
                      <FaGithub style={{ marginRight: "6px" }} />GitHub
                    </a>
                  </div>
                </div>
              ) : null}

              {/* Badge */}
              <div style={{ padding: project.image ? "12px 20px 0" : "18px 20px 0" }}>
                <span style={{
                  background: project.badgeStyle.bg,
                  color: project.badgeStyle.color,
                  border: `1px solid ${project.badgeStyle.color}44`,
                  padding: "3px 12px",
                  borderRadius: "12px",
                  fontSize: "11px",
                  fontFamily: "'Fira Code', monospace",
                  fontWeight: "600"
                }}>
                  {project.badge}
                </span>
              </div>

              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <div className="tech-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tech-tag">{tag}</span>
                  ))}
                </div>
                {/* Links for cards without image overlay */}
                {!project.image && (
                  <div className="d-flex gap-2 mt-3 flex-wrap">
                    {project.repository !== "#" && (
                      <a href={project.repository} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                        <FaExternalLinkAlt style={{ marginRight: "6px", fontSize: "11px" }} />Live Demo
                      </a>
                    )}
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-btn ghost">
                      <FaGithub style={{ marginRight: "6px" }} />GitHub
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;