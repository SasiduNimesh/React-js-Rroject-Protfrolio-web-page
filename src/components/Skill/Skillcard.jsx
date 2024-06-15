import React from 'react';
import "./skillcard.css";

const Skillcard = ({ title , iconurl , isActive , onClick }) => {
  return (
    <div className={`skill-card ${isActive ? "active" : " "}`} 
     onClick={()=>onClick()}>
        <div className='skill-icon'>
            <img src={iconurl} alt=" " />
        </div>
        <span>{title}</span>
     </div>
  )
}

export default Skillcard;