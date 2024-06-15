import React, { useState } from 'react';
import './navbar.css';
import logo from "../assets/mylogo.png";
import menulogo from "../assets/menu.png";
import Mobilemenu from './Mobilemenu';
import { pageLinks } from '../data/pagelink.js';
import { NavLink } from 'react-bootstrap';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
    <Mobilemenu isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className='nav-wrapper'>
        <div className='nav-content'>
          <img className='logo' src={logo} alt="" />
          <ul className='nav-links' id={NavLink}>
            {pageLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.href} className='menu-item'>{link.text}</a>
                </li>
              );
            })}
            
            <button className='contact-btn' onClick={()=>{}}>
              Hire Me
            </button>
          </ul>

          <button className='menu-btn' onClick={toggleMenu}>
            <span className={"material-symbols-outlined"} style={{fontSize:"1.8rem"}}><img src={menulogo} alt='' />
            {openMenu ? " " :" "}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

