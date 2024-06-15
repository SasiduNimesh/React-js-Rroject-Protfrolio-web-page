import React from 'react';
import './project.css';
import proImg1 from '../assets/responsive.png';
import proImg2 from '../assets/weather.png';
import proImg3 from '../assets/mobile.png';
import proImg4 from '../assets/pro4.png';


function Project() {
  return (
    <section className='project-containor' id='Project'>
        <h2>My Projects</h2>
     <div className="projects">
    
      <div className="project">
        <img src={proImg1} alt="Project 1" />
        <div className="project-info">
          <h3>Responsive Portfolio Website</h3>
          <p>A responsive portfolio website showcasing various projects and skills using HTML, CSS, and JavaScript.</p>
          <button className="btn">View Project</button>
        </div>
      </div>
      <div className="project">
        <img src={proImg2} alt="Project 2" />
        <div className="project-info">
          <h3>Weather App</h3>
          <p>A design of Weather app create by using html,css and API key.</p>
          <button className="btn">View Project</button>
        </div>
      </div>
      <div className="project">
        <img src={proImg3} alt="Project 3" />
        <div className="project-info">
          <h3>Mobile App Landing Page</h3>
          <p>A landing page for a mobile app featuring sleek design, animations, and responsive layout.</p>
          <button className="btn">View Project</button>
        </div>
      </div>
      <div className="project">
        <img src={proImg4} alt="Project 4" />
        <div className="project-info">
          <h3>Interactive Web Application</h3>
          <p>An interactive web application allowing users to create and share digital artwork using HTML5 canvas and JavaScript.</p>
          <button className="btn">View Project</button>
        </div>
      </div>
    </div>
    </section>
   
  );
}

export default Project;
