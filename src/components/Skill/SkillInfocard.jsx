import React from "react";
import "./skillInfo.css";

const SkillInfocard = ({ heading, skills }) => {
  return (
    <div className="skill-info-card">
        <h6>{heading}</h6>
        <div className="skillcard-content">
            {skills.map((item, index)=>(
                <React.Fragment key={`skill_${index}`}>
                    <div className="skills-info">
                        <p>{item.skill}</p>
                        <p className="percentage">{item.percentage}</p>
                    </div>
                    <div className="skill-progress-bar">
                        <div className="skill-progress" style={{width: item.percentage}} />
                        
                    </div>
                </React.Fragment>
            ))}
        </div>
    </div>
  )
}

export default SkillInfocard
