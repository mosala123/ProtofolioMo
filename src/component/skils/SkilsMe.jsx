import React from 'react';
import "./SkilsMe.css";

const SkilsMe = () => {
  return (
    <div  className="  pb-5"style={{display:"flex",alignItems:"center",minHeight:"100vh ",justifyContent:"center",flexDirection:"column"}}> 
    <div className="SkilsMe container  "  >
      <div className="d-flex align-items-center gap-3 pt-5">
        <h2 className="mb-2 text-light">Skills</h2>
        <div style={{ width: "240px", height: "2px", backgroundColor: "#8e00ff" }}></div>
      </div>

      <div className="row mt-5">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="leftskills images"></div>
        </div>

        <div className="col-lg-6 col-md-12 skills-list   ">
        <div className="row mt-4 px-3">
  {/* Languages */}
  <div className="col-md-6">
    <div className="skill-box">
      <h5>Languages</h5>
      <p>HTML, CSS, JavaScript</p>
    </div>
  </div>

  {/* Styling & UI */}
  <div className="col-md-6  " >
    <div className="skill-box button1">
      <h5>Styling & UI</h5>
      <p>Bootstrap, SCSS</p>
    </div>
  </div>

  {/* Frameworks & Libraries */}
  <div className="col-md-6">
    <div className="skill-box">
      <h5>Frameworks & Libraries</h5>
      <p>React.js, Next.js</p>
    </div>
  </div>

  {/* State Management */}
  <div className="col-md-6">
    <div className="skill-box">
      <h5>State Management</h5>
      <p>Redux Toolkit, Zustand, Context API</p>
    </div>
  </div>

  {/* API & Fetching */}
  <div className="col-md-6">
    <div className="skill-box">
      <h5>API & Fetching</h5>
      <p>REST API, Fetch API</p>
    </div>
  </div>

  {/* Backend Services */}
  <div className="col-md-6">
    <div className="skill-box">
      <h5>Backend Services</h5>
      <p>Appwrite, Firebase</p>
    </div>
  </div>

  {/* Tools */}
  <div className="col-md-6">
    <div className="skill-box">
      <h5>Tools</h5>
      <p>VSCode, Figma, Git, LinkedIn, GitHub</p>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default SkilsMe;
