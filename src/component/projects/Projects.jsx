import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import rafiqa from "../../../public/images/reqia.jpg"
import shoponline from "../../../public/images/shop.jpg"
import wraether from "../../../public/images/wraether.jpg"
import drgon from "../../../public/images/drgon.jpg"
import Contemporary from "../../../public/images/Contemporary.jpg"
import producthub from "../../../public/images/producthub.jpg"
import codelearn from "../../../public/images/codelearn.jpg"
import protofile from "../../../public/images/protofile.jpg"
import "./Projects.css"

const Allprojects = [
  {
    title: "Rafiq",
    description: "Your companion in spreading good and religious knowledge. Built with love and purpose.",
    linkRepository: "https://mosala123.github.io/Rafiq",
    linkGitHub: "https://github.com/mosala123/Rafiq",
    image: rafiqa,
    catogry:"react js "
  },
  {
    title: "Shop Online",
    description: "An online shopping platform offering the best deals. Designed for a smooth shopping experience.",
    linkRepository: "https://mosala123.github.io/ecommerce-finnally",
    linkGitHub: "https://github.com/mosala123/ecommerce-finnally",
    image: shoponline,
    catogry:"boostrap  "
  },
  {
    title: "Weather App",
    description: "Weather forecast and current updates anywhere you go. Simple, fast, and reliable.",
    linkRepository: "https://mosala123.github.io/weather-api/",
    linkGitHub: "https://github.com/mosala123/weather-api",
    image: wraether
  },
  {
    title: "Dragon Game",
    description: "Adventure dragon-themed game full of fun and challenges. Dive into an epic world.",
    linkRepository: "https://mosala123.github.io/dragon-game/",
    linkGitHub: "https://github.com/mosala123/dragon-game",
    image: drgon
  },
  {
    title: "Contemporary Portfolio",
    description: "Modern portfolio website showcasing talents and work. Built with style and creativity.",
    linkRepository: "https://mosala123.github.io/Contemporary",
    linkGitHub: "https://github.com/mosala123/Contemporary",
    image: Contemporary
  },
  {
    title: "Product Hub",
    description: "Central hub to display and manage products. Organized and user-friendly.",
    linkRepository: "https://mosala123.github.io/producthub/",
    linkGitHub: "https://github.com/mosala123/producthub",
    image: producthub
  },
  {
    title: "Code Learn",
    description: "Learn coding through interactive tutorials and examples. Easy and intuitive platform.",
    linkRepository: "https://mosala123.github.io/CodeLearn/",
    linkGitHub: "https://github.com/mosala123/CodeLearn",
    image: codelearn
  },
  {
    title: "Personal Profile",
    description: "Personal profile website to showcase skills and experience. Clean and professional design.",
    linkRepository: "https://mosala123.github.io/protofile/",
    linkGitHub: "https://github.com/mosala123/protofile",
    image: protofile
  },
];

const Projects = () => {
  return (
    <div className='container Projects text-light px-3 mt-5 pb-5 pt-5' style={{ minHeight: "100vh" }}>
      <div className='mt-5 d-flex align-items-center justify-content-between'>
        <div className='d-flex align-items-center gap-3'>
          <h2 className="mb-2">Projects</h2>
          <div style={{ width: "200px", height: "2px", backgroundColor: "#8e00ff" }}></div>
        </div>

        <a href="/ProjectsAll" className="text-light gap-2 d-flex align-items-center pb-1 ">
          View all <FaLongArrowAltRight />
        </a>
      </div>
  

  
      <div className="row mt-4 justify-content-center">
        {Allprojects.map((project, index) => (
          <div key={index} className='col-lg-4 col-md-6 col-sm-12'>
            <div className="card mb-4" style={{ backgroundColor: "transparent", color: "white", border: "2px solid #8e00ff" }}>
              <img
                className="card-img-top"
                src={project.image}
                alt={project.title}
                style={{ height: "230px", borderRadius: "13px 13px 0 0" }}
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <div className='d-flex align-items-center gap-3'>
                  <a href={project.linkRepository} className="button1" style={{ whiteSpace: "normal" }} target="_blank" rel="noopener noreferrer">Repository</a>
                  <a href={project.linkGitHub} className="button2" style={{ whiteSpace: "normal" }} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;
