import "./mobilenav.css";
import logo from "../assets/mylogo.png";

const Mobilemenu = ({isOpen,toggleMenu}) => {
  return (
    <>
        <div className={`mobile-menu ${ isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <div className="mobile-menu-containor">
            <img className='logo' src={logo} alt="" />
            <ul>
                <li>
                <a id="1" href="#Home" className='menu-item'>Home</a>
                </li>
                <li>
                <a id="2" href="#Skill" className='menu-item'>Skill</a>
                </li>
                <li>
                <a id="3" href="#Experience" className='menu-item'>Experience</a>
                </li>
                <li>
                <a id="4" href="#Project" className='menu-item'>Project</a>
                </li>
                <li>
                <a id="5" href="#Contact" className='menu-item'>Contact</a>
                </li>

            </ul>
                <button className='contact-btn' onClick={()=>{}}>
                Hire Me
                </button>
            </div>
        </div>
    </>
  )
}

export default Mobilemenu