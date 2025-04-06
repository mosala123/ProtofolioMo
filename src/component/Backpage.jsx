import React from 'react';
import { FaLongArrowAltLeft,   } from "react-icons/fa";  
import { useNavigate } from 'react-router-dom';

const Backpage = () => {
    const navagite=useNavigate()
  return (
    <div style={{ position: 'relative' }}>  
      <button onClick={()=>navagite(-1)}
        style={{
          position: 'fixed',
          top: '20%',
          right: '1%',
          backgroundColor: '#8e00ff',
          zIndex: '2',
          width: 'auto', 
          color: 'white', 
          border: 'none',  
          borderRadius: '5px',  
          padding: '10px 15px', 
          cursor: 'pointer', 
          display: 'flex',  
          alignItems: 'center',  
          fontSize:"26px"
        }}
      >
        <FaLongArrowAltLeft />  
      </button>
    </div>
  );
};

export default Backpage;