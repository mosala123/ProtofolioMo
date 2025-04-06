import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegMessage } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Contactme = () => {
    return (
        <div className='container  text-light  pb-5  ' style={{ marginTop: "200px   " }}  >





            <div className='  d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-3'>
                    <h2 className="mb-2">Contacts</h2>
                    <div style={{ width: "200px", height: "2px", backgroundColor: "#8e00ff" }}></div>
                </div>

            </div>


            <div className='row mt-2 text-light' >

                <div className="col-lg-8 col-md-12 col-sm-12 mt-4 mb-3 Projects">
                    <div style={{ maxWidth: "570px" }}>
                        <p>
                            I’m interested in freelance opportunities. Whether it’s a small project or a long-term collaboration, I’m always excited to take on new challenges and bring ideas to life.
                            However, if you have other requests, ideas, or any questions, don’t hesitate to contact me.
                            I’m open to discussing anything related to design, development, or even brainstorming new concepts together.
                            Looking forward to hearing from you!
                        </p>

                    </div>
                    <button className='  button1 mb-4 mt-2 btn '>Contacts Me </button>
                </div>


                <div className="col-lg-4 col-md-12 col-sm-12 Projects">
                    <div className='card text-light p-4' style={{ backgroundColor: "transparent", border: "2px solid #8e00ff" }}>
                        <h4>Message me here</h4>
                        <div className="d-flex gap-3 mt-2">
                            <p><FaRegMessage /> </p>
                            <Link to="/elmosalah74@gmail.com" className='text-light'>elmosalah74@gmail.com</Link>
                        </div>
                        <div className="d-flex gap-3 mt-2">
                            <p><FaPhoneAlt /> </p>
                            <Link style={{ textDecoration: "none" }} to="/" className='text-light'>+201024668770</Link>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Contactme
