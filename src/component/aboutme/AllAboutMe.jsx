import React from 'react'
 
import SkilsMe from '../skils/SkilsMe'
import imageme from "../../../public/images/Image (3).png"
import { Link } from 'react-router-dom';
import Backpage from '../Backpage';
const AllAboutMe = () => {
  return (
    <div>
       <div className="container pb-5   px-3  Projects text-light" style={{ display: "flex", justifyContent: "center", minHeight: "100vh" ,alignItems:"center",paddingTop:"120px "}}>
  <div className="row align-items-center">

    <div className="col-md-6">
      <div className="d-flex align-items-center gap-3">
        <h2 className="mb-2">About Me</h2>
        <div style={{ width: "200px", height: "2px", backgroundColor: "#8e00ff" }}></div>
      </div> 

      <div className="typewriter mt-4 mb-4">
        <h1 style={{color:"#c778dd"}}>  I’m Frontend React Dev</h1>
      </div>
       

      <div style={{letterSpacing:"1px ",fontWeight:"400",fontFamily:"sans",fontSize:"18px"}}>
  <p>Hello! I’m Mohamed Ibrahim Salah, a passionate Front-End Developer based in El Mahalla El Kubra, Egypt. I specialize in building modern, interactive web applications using React.js and strive to enhance user experience through clean and efficient code.</p>
  
  <p>With over two and a half years of experience, I’ve worked on various individual and collaborative projects, primarily focusing on React.js. My goal is to continuously grow my skills and create high-quality, user-friendly interfaces.</p>
  
  <p>I'm dedicated to learning new technologies and constantly improving my craft. In the near future, I aim to advance to a Senior Developer role and stay ahead of trends in the tech world.</p>
  
  <p>Outside of coding, I enjoy reading, traveling, and sports. I’m also an avid gamer and design enthusiast, and I love exploring different cultures and languages, which fuel my creativity.</p>
  
  <p>If you're looking for a dedicated developer who cares about quality, innovation, and detail, feel free to reach out. I’m currently open to full-time or freelance opportunities.</p>
</div>



      <Link to="/FormContact" className="btn button1 px-3">   Contact Me</Link>
    </div>

    <div className="col-md-6 text-center">
      <img
        style={{ borderBottom: "2px solid #c778dd" }}
        src={imageme}
        alt="Mohamed Ibrahim Salah"
        className="img-fluid"
      />
    </div>

  </div>
</div>

      <SkilsMe />
      <Backpage />  
    </div>
  )
}

export default AllAboutMe
