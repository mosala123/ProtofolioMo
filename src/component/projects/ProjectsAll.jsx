import React, { useState } from 'react';  // تأكد من استيراد useState
import "./Projects.css";
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
import Backpage from '../Backpage';

const ProjectsAll = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      title: "Rafiq",
      description: "Your companion in spreading good and religious knowledge.",
      image: rafiqa,
      repository: "https://mosala123.github.io/Rafiq",
      github: "https://github.com/mosala123/Rafiq",
      catogry: "React js"
    },
    {
      title: "Smart Shoppin",
      description: "Discover great deals online and enjoy amazing offers!",
      image: shoponline,
      repository: "https://mosala123.github.io/ecommerce-finnally",
      github: "https://github.com/mosala123/ecommerce-finnally",
      catogry: "React jss"
    },
    {
      title: "Weather Updates",
      description: "Get real-time weather forecasts, including temperature, humidity ",
      image: wraether,
      repository: "https://mosala123.github.io/fianalWeather",
      github: "https://github.com/mosala123/fianalWeather",
      catogry: "React js"
    },
    {
      title: "Modern Execution",
      description: "Innovative solutions for projects that drive success and inspire creativity.",
      image: Contemporary,
      repository: "https://mosala123.github.io/-Contemporary-execution-/",
      github: "https://github.com/mosala123/-Contemporary-execution-",
      catogry: "Boostrap"
    },
    {
      title: "Code Learn",
      description: "Learn coding interactively with real-world projects and hands-on practice.",
      image: codelearn,
      repository: "https://mosala123.github.io/codelearn_",
      github: "https://github.com/mosala123/codelearn_",
      catogry: "Boostrap"
    },
    {
      title: "My Profile",
      description: "Manage your information and settings to keep your account secure.",
      image: protofile,
      repository: "https://mosala123.github.io/Portfolio_1",
      github: "https://github.com/mosala123/Portfolio_1",
      catogry: "Boostrap"
    },
    {
      title: "Product Hub",
      description: "Innovative solutions for projects that drive success and achieve remarkable outcomes.",
      image: producthub,
      repository: "https://mosala123.github.io/ProductHub11",
      github: "https://github.com/mosala123/ProductHub11",
      catogry: "React js"
    },
    {
      title: "Film Dragon",
      description: "Explore epic movies & stories across genres and from around the world.",
      image: drgon,
      repository: "https://mosala123.github.io/dragon-1",
      github: "https://github.com/mosala123/dragon-1",
      catogry: "Boostrap"
    },
    {
      title: "Coffee Lovers",
      description: "Brewing the best coffee moments with carefully selected beans and expert techniques.",
      image: coffe,
      repository: "https://mosala123.github.io/coffe-1",
      github: "https://github.com/mosala123/coffe-1",
      catogry: "Boostrap"
    },
    {
      title: "CRUD",
      description: "Simplify updates with ease and keep your system running smoothly and efficiently.",
      image: cruds,
      repository: "https://mosala123.github.io/Portfolio_1",
      github: "https://github.com/mosala123/updetecruds",
      catogry: "html-css-js"
    },
    {
      title: "Cut Down",
      description: "Your solution to manage and reduce operational costs effectively.",
      image: cutdown,
      repository: "https://mosala123.github.io/countdown1/",
      github: "https://github.com/mosala123/countdown1",
      catogry: "html-css-js"
    },
    {
      title: "Online Rosary",
      description: "Spiritual moments at your fingertips, bringing peace and inspiration to your daily life.",
      image: moslam,
      repository: "https://mosala123.github.io/mosalah10",
      github: "https://github.com/mosala123/mosalah10",
      catogry: "html-css-js"
    }
  ];

  // تصفية المشاريع بناءً على الفئة المختارة
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter((project) => project.catogry === selectedCategory);

  return (
    <div className='Projects container text-light px-4 pb-5' style={{ paddingTop: "130px" }}>
      <div className='d-flex align-items-center gap-3'>
        <h2 className="mb-2">Projects All</h2>
        <div style={{ width: "200px", height: "2px", backgroundColor: "#8e00ff" }}></div>
      </div>
      <p className='mt-4' style={{ color: "#8e00ff" }}>List of my projects</p>

      <div className='text-lg-start text-center'>
        <button 
          className={`btn ${selectedCategory === 'All' ? 'btn-success' : 'btn-info'}`} 
          onClick={() => setSelectedCategory('All')}
        >
          All
        </button>
        <button 
          className={`btn ${selectedCategory === 'React js' ? 'btn-success' : 'btn-primary'} m-3`} 
          onClick={() => setSelectedCategory('React js')}
        >
          React JS
        </button>
        <button 
          className={`btn ${selectedCategory === 'Boostrap' ? 'btn-success' : 'btn-primary'} m-3`} 
          onClick={() => setSelectedCategory('Boostrap')}
        >
          Bootstrap
        </button>
        <button 
          className={`btn ${selectedCategory === 'html-css-js' ? 'btn-success' : 'btn-primary'} m-3`} 
          onClick={() => setSelectedCategory('html-css-js')}
        >
          HTML / CSS / JS
        </button>
      </div>

      <div className="row mt-2 justify-content-center">
        {filteredProjects.map((project, index) => (
          <div key={index} className='col-lg-4 col-md-6 col-sm-12'>
            <div className="card mb-4" style={{ backgroundColor: "transparent", color: "white", border: "2px solid #8e00ff" }}>
              <img className="card-img-top" src={project.image} alt={project.title} style={{ height: "230px", borderRadius: "13px 13px 0 0" }} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <div className='d-flex align-items-center gap-3'>
                  <a href={project.repository} className="button1" target="_blank" rel="noopener noreferrer">Repository</a>
                  <a href={project.github} className="button2" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
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
