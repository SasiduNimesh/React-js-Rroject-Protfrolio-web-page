import React, { useState } from 'react';
import "./skill.css";
import Skillcard from './Skillcard';
import SkillInfocard from './SkillInfocard.jsx';
import { SKILLS } from '../data/data.js';

const Skill = () => {
  const [selectedSkill,setSelectedSkill] = useState (SKILLS[0]);
  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section className='skills-contatiner' id='Skill'>
      <h2>Technical Proficiency</h2>
      <div className='skills-content'>
        <div className='skills'>
          {
            SKILLS.map((item)=>(
              <Skillcard
                key={item.title}
                iconurl={item.icon}
                title={item.title}
                isActive={selectedSkill.title===item.title}
                onClick={()=>{
                  handleSelectSkill(item);
                }}
              />
            ))}
        </div>

        <div className='skills-info'>
            <SkillInfocard
              heading={selectedSkill.title}
              skills={selectedSkill.skills}
            />
        </div>
      </div>
        
    </section>

  );
};

export default Skill;

