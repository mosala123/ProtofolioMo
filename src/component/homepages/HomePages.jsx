import React from 'react'
import "./HomePages.css"
import imagesme from "../../../public/images/Image1.png"
import Projects from '../projects/Projects'
import SkilsMe from '../skils/SkilsMe'
import AboutMe from '../aboutme/AboutMe'
import Contactme from '../contact/Contactme'
import Footer from '../footer/Footer'
import { Link } from 'react-router-dom'
const HomePages = () => {
  return (
    <div className='HomePages container text-light px-3 py-5   '   >


      <div className=" container mt-5 " style={{ paddingTop: "50px " }} >
        <div className="row      d-flex align-items-center  justify-content-center " style={{ minHeight: "70vh" }}>
          <div className='col-lg-7 col-md-12 col-sm-12 '>
            <div className="typewriter">
              <h1 className='mt-4 fs-3'>
                 Mohamed Ibrahim Salah</h1>
              <p className='fs-3 mt-3 mb-4'>A  <span className='fs-2'
                style={{ color: "#c778dd" }}>Frontend Developer
              </span> specializing in  <span style={{ color: "#c778dd" }}> React.js </span>,
                I build engaging and functional user interfaces that contribute to achieving user goals.</p>
              <Link to="/FormContact" className='Contactme fs-4 mt-2 mb-4 ' style={{textDecoration:"none"}}>Contact me !</Link>
            </div>


            <div className="quote-container mt-5">
              <span className="quote-icon">❝</span>
              <p className='fs-5'>With smooth scrolling comes " This isn't as smooth as a Treika pass ! We need something better ! "</p>
              <div className="author">
                <span className="quote-line"></span>
                <span className="quote-icon">❞</span>
                <span>- Mo .</span>
              </div>
            </div>
          </div>







          <div className="images col-lg-5 col-md-12 col-sm-12  ">
            <div style={{ position: "relative" }} >
       <img src={imagesme} alt='images me' className="img-fluid" />


    <p className='fs-6 w-100 d-flex gap-2 align-items-center justify-content-start  ' style={{
                position: "absolute", top: "102% ", left: "2%",
                border: "1px solid white", padding: "4px 10px ",borderRadius:"5px"
              }} >

                <span className='' style={{ width: "20px", height: "20px", backgroundColor: "#8e00ff" }}>
                </span>

                Currently working on <span className='fs-5'>Portfolio
                </span>
              </p>
            </div>
          </div>















        </div>




      </div>







      <Projects  />
      <SkilsMe />
      <AboutMe /> 
      <Contactme />
    </div>
  )
}

export default HomePages
