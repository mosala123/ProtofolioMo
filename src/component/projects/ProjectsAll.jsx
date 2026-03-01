import React, { useState } from 'react';
import "./Projects.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Backpage from '../Backpage';

// Old project images
import rafiqa from "../../../public/images/reqia.jpg";
import shoponline from "../../../public/images/shop.jpg";
import wraether from "../../../public/images/wraether.jpg";
import cutdown from "../../../public/images/cutdown.jpg";
import drgon from "../../../public/images/drgon.jpg";
import coffe from "../../../public/images/coffe.jpg";
import Contemporary from "../../../public/images/Contemporary.jpg";
import producthub from "../../../public/images/producthub.jpg";
import codelearn from "../../../public/images/codelearn.jpg";
import moslam from "../../../public/images/moslam.jpg";
import protofile from "../../../public/images/protofile.jpg";
import cruds from "../../../public/images/cruds.jpg";

// Generated SVG thumbnails
import {
  xhubThumb,
  footballThumb,
  myenglishThumb,
  flavorlandThumb,
  fixedcarThumb
} from './projectThumbnails.js';

const allProjects = [
  // ===== Next.js =====
  {
    title: "X-Hub",
    description: "Modern e-commerce platform with product listings, cart management, and seamless shopping experience.",
    repository: "https://x-hub-eight.vercel.app/",
    github: "https://github.com/mosala123/x-hub",
    image: xhubThumb,
    category: "Next.js",
    tags: ["Next.js", "React", "CSS"],
    badge: "Next.js",
    badgeStyle: { bg: "rgba(255,255,255,0.08)", color: "#ffffff" }
  },
  // ===== React.js =====
  {
    title: "Football App",
    description: "Live football scores, standings, and match details with real-time sports API.",
    repository: "https://football-blond.vercel.app/",
    github: "https://github.com/mosala123/football",
    image: footballThumb,
    category: "React.js",
    tags: ["React.js", "Sports API", "Bootstrap"],
    badge: "React.js",
    badgeStyle: { bg: "rgba(97,218,251,0.1)", color: "#61DAFB" }
  },
  {
    title: "Invoices System",
    description: "Graduation project — full invoice management with CRUD, filtering, and professional dashboard.",
    repository: "https://invoices-2i8q.vercel.app/",
    github: "https://github.com/mosala123/invoices",
    image: null,
    category: "React.js",
    tags: ["React.js", "Redux", "Firebase"],
    badge: "🎓 Graduation",
    badgeStyle: { bg: "rgba(255,215,0,0.1)", color: "#FFD700" }
  },
  {
    title: "Dalilk",
    description: "Islamic guidance app with Quran, prayers, Azkar, and religious content.",
    repository: "https://dalilk-psi.vercel.app/",
    github: "https://github.com/mosala123/Dalilk",
    image: null,
    category: "React.js",
    tags: ["React.js", "API", "CSS"],
    badge: "🕌 Islamic",
    badgeStyle: { bg: "rgba(0,200,100,0.1)", color: "#00c864" }
  },
  {
    title: "Hospitals System",
    description: "Hospital management system for patients, doctors, and appointment tracking.",
    repository: "https://hosbitals-system.vercel.app/",
    github: "https://github.com/mosala123/Hosbitals-System",
    image: null,
    category: "React.js",
    tags: ["React.js", "Redux", "Bootstrap"],
    badge: "React.js",
    badgeStyle: { bg: "rgba(97,218,251,0.1)", color: "#61DAFB" }
  },
  {
    title: "Fixed Car",
    description: "Car maintenance service platform — browse services, book appointments, track vehicles.",
    repository: "https://fixed-car.vercel.app/",
    github: "https://github.com/mosala123/fixed-car",
    image: fixedcarThumb,
    category: "React.js",
    tags: ["React.js", "CSS", "Bootstrap"],
    badge: "React.js",
    badgeStyle: { bg: "rgba(97,218,251,0.1)", color: "#61DAFB" }
  },
  {
    title: "FlavorLand",
    description: "Rich food & recipe platform with search, filters, and cuisines from around the world.",
    repository: "#",
    github: "https://github.com/mosala123/FlavorLand",
    image: flavorlandThumb,
    category: "React.js",
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
    category: "React.js",
    tags: ["React.js", "CSS"],
    badge: "React.js",
    badgeStyle: { bg: "rgba(97,218,251,0.1)", color: "#61DAFB" }
  },
  {
    title: "Rafiq",
    description: "Companion for spreading good and religious knowledge. Built with love and purpose.",
    repository: "https://mosala123.github.io/Rafiq",
    github: "https://github.com/mosala123/Rafiq",
    image: rafiqa,
    category: "React.js",
    tags: ["React.js", "CSS"],
    badge: "React.js",
    badgeStyle: { bg: "rgba(97,218,251,0.1)", color: "#61DAFB" }
  },
  {
    title: "Weather App",
    description: "Real-time weather forecasts with temperature, humidity, and location search.",
    repository: "https://mosala123.github.io/fianalWeather/",
    github: "https://github.com/mosala123/fianalWeather",
    image: wraether,
    category: "React.js",
    tags: ["React.js", "Weather API"],
    badge: "React.js",
    badgeStyle: { bg: "rgba(97,218,251,0.1)", color: "#61DAFB" }
  },
  {
    title: "Product Hub",
    description: "Central hub to display and manage products. Organized and user-friendly.",
    repository: "https://mosala123.github.io/ProductHub11/",
    github: "https://github.com/mosala123/ProductHub11",
    image: producthub,
    category: "React.js",
    tags: ["React.js", "Redux"],
    badge: "React.js",
    badgeStyle: { bg: "rgba(97,218,251,0.1)", color: "#61DAFB" }
  },
  {
    title: "CRUD App",
    description: "Clean data management system with create, read, update, and delete operations.",
    repository: "https://updetecruds.vercel.app/",
    github: "https://github.com/mosala123/updetecruds",
    image: cruds,
    category: "React.js",
    tags: ["React.js", "CSS"],
    badge: "React.js",
    badgeStyle: { bg: "rgba(97,218,251,0.1)", color: "#61DAFB" }
  },
  // ===== Bootstrap =====
  {
    title: "Modern Execution",
    description: "Innovative agency website for projects that drive success and inspire creativity.",
    repository: "https://mosala123.github.io/-Contemporary-execution-/",
    github: "https://github.com/mosala123/-Contemporary-execution-",
    image: Contemporary,
    category: "Bootstrap",
    tags: ["Bootstrap", "CSS", "JavaScript"],
    badge: "Bootstrap",
    badgeStyle: { bg: "rgba(121,82,179,0.1)", color: "#7952b3" }
  },
  {
    title: "Code Learn",
    description: "Learn coding interactively with real-world projects and hands-on practice.",
    repository: "https://mosala123.github.io/codelearn_/",
    github: "https://github.com/mosala123/codelearn_",
    image: codelearn,
    category: "Bootstrap",
    tags: ["Bootstrap", "HTML", "CSS"],
    badge: "Bootstrap",
    badgeStyle: { bg: "rgba(121,82,179,0.1)", color: "#7952b3" }
  },
  {
    title: "My Profile v1",
    description: "First portfolio website showcasing early skills and projects with Bootstrap design.",
    repository: "https://mosala123.github.io/Portfolio_1",
    github: "https://github.com/mosala123/Portfolio_1",
    image: protofile,
    category: "Bootstrap",
    tags: ["Bootstrap", "CSS"],
    badge: "Bootstrap",
    badgeStyle: { bg: "rgba(121,82,179,0.1)", color: "#7952b3" }
  },
  {
    title: "Film Dragon",
    description: "Explore epic movies and stories across genres from around the world.",
    repository: "https://mosala123.github.io/dragon-1/",
    github: "https://github.com/mosala123/dragon-1",
    image: drgon,
    category: "Bootstrap",
    tags: ["Bootstrap", "JavaScript"],
    badge: "Bootstrap",
    badgeStyle: { bg: "rgba(121,82,179,0.1)", color: "#7952b3" }
  },
  {
    title: "Coffee Lovers",
    description: "Brewing the best coffee moments with carefully selected beans and expert techniques.",
    repository: "https://mosala123.github.io/coffe-1/",
    github: "https://github.com/mosala123/coffe-1",
    image: coffe,
    category: "Bootstrap",
    tags: ["Bootstrap", "CSS"],
    badge: "Bootstrap",
    badgeStyle: { bg: "rgba(121,82,179,0.1)", color: "#7952b3" }
  },
  {
    title: "Smart Shopping",
    description: "Discover great deals online and enjoy amazing offers with smooth UX.",
    repository: "https://mosala123.github.io/ecommerce-finnally",
    github: "https://github.com/mosala123/ecommerce-finnally",
    image: shoponline,
    category: "Bootstrap",
    tags: ["Bootstrap", "JavaScript"],
    badge: "Bootstrap",
    badgeStyle: { bg: "rgba(121,82,179,0.1)", color: "#7952b3" }
  },
  // ===== HTML/CSS/JS =====
  {
    title: "Countdown Timer",
    description: "Elegant countdown timer with customizable dates and smooth animations.",
    repository: "https://mosala123.github.io/Countdown-/",
    github: "https://github.com/mosala123/Countdown-",
    image: cutdown,
    category: "HTML/CSS/JS",
    tags: ["HTML", "CSS", "JavaScript"],
    badge: "Vanilla JS",
    badgeStyle: { bg: "rgba(247,223,30,0.1)", color: "#F7DF1E" }
  },
  {
    title: "Calculator",
    description: "Clean, modern calculator with keyboard support and smooth animations.",
    repository: "https://calculator-xkht.vercel.app/",
    github: "https://github.com/mosala123/calculator-",
    image: null,
    category: "HTML/CSS/JS",
    tags: ["HTML", "CSS", "JavaScript"],
    badge: "Vanilla JS",
    badgeStyle: { bg: "rgba(247,223,30,0.1)", color: "#F7DF1E" }
  },
  {
    title: "Online Rosary",
    description: "Spiritual app with Quran, Azkar, prayer times, and Islamic tools — all in one.",
    repository: "https://mosala123.github.io/mosalah10/",
    github: "https://github.com/mosala123/mosalah10",
    image: moslam,
    category: "HTML/CSS/JS",
    tags: ["HTML", "CSS", "JavaScript"],
    badge: "🕌 Islamic",
    badgeStyle: { bg: "rgba(0,200,100,0.1)", color: "#00c864" }
  },
];

const categories = [
  { label: "All", value: "All" },
  { label: "Next.js", value: "Next.js" },
  { label: "React.js", value: "React.js" },
  { label: "Bootstrap", value: "Bootstrap" },
  { label: "HTML / CSS / JS", value: "HTML/CSS/JS" },
];

const ProjectsAll = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filtered = selectedCategory === "All"
    ? allProjects
    : allProjects.filter(p => p.category === selectedCategory);

  return (
    <div className='Projects container text-light px-3 pb-5' style={{ paddingTop: "110px", minHeight: "100vh" }}>

      <div className='d-flex align-items-center gap-3 mb-1'>
        <h2 className="mb-0 fw-bold">All Projects</h2>
        <div className="section-line"></div>
      </div>
      <p style={{ color: "#8e00ff", fontFamily: "'Fira Code', monospace", fontSize: "13px", marginBottom: "24px" }}>
        // {filtered.length} projects {selectedCategory !== "All" ? `in ${selectedCategory}` : "total"}
      </p>

      <div className='d-flex flex-wrap gap-2 mb-4'>
        {categories.map(cat => (
          <button
            key={cat.value}
            className={`btn-filter ${selectedCategory === cat.value ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="row g-4">
        {filtered.map((project, index) => (
          <div key={index} className='col-lg-4 col-md-6 col-12'>
            <div className="project-card">

              {project.image && (
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
              )}

              <div style={{ padding: project.image ? "12px 20px 0" : "18px 20px 0" }}>
                <span style={{
                  background: project.badgeStyle.bg,
                  color: project.badgeStyle.color,
                  border: `1px solid ${project.badgeStyle.color}44`,
                  padding: "3px 10px",
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
      <Backpage />
    </div>
  );
};

export default ProjectsAll;