import React from 'react';
import imageme from "../../../public/images/Image (3).png"
import { Link } from 'react-router-dom';
const AboutMe = () => {
  return (
    <div className="container Projects  " style={{ display: "flex", justifyContent: "center", minHeight: "100vh" }}>
      <div className="row align-items-center">
        

        <div className="col-md-6">
        <div className='d-flex align-items-center gap-3'>
          <h2 className="mb-2">About Me </h2>
          <div style={{ width: "200px", height: "2px", backgroundColor: "#8e00ff" }}></div>
        </div> 
          <div className='typewriter mt-3'>
            <h1>Mohamed Ibrahim Salah</h1>
          </div>

          <p>
            Hello there! My name is Mohamed Ibrahim Salah, and I am a passionate web developer with a strong focus on building dynamic and user-friendly applications using React.js and other modern technologies. I love turning ideas into reality through clean, efficient, and scalable code.
          </p>

          <p>
            Over the past few years, I’ve worked on a variety of projects ranging from small business websites to complex web applications. I continuously strive to stay up to date with the latest trends in web development and always look forward to learning something new. My approach emphasizes both functionality and great user experience.
          </p>

          <p>
            If you’re looking for someone to bring your vision to life, or even just want to discuss tech ideas, feel free to reach out. I’m always open to freelance opportunities, collaborations, or simply connecting with like-minded people. Let’s build something great together!
          </p>

          <Link to="/AllAboutMe" className='btn button1 px-3'>Read More</Link>
        </div>


        <div className="col-md-6 text-center">
          <img
          style={{borderBottom:"2px solid  #c778dd"}}
            src={imageme}
            alt="Mohamed Ibrahim"
            className="img-fluid  "
          />
        </div>

      </div>
    </div>
  );

};

export default AboutMe;
