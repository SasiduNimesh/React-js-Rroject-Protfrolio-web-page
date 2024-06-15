import React from 'react';
import './contact.css';
import ContactCard from './ContactCard';
import ContactFrom from './ContactFrom';
import coImg1 from "../assets/github.png";
import coImg2 from "../assets/linkedin_logo_icon_147268.png";

const Contact = () => {
  return (
    <section className='contact-contatiner' id='Contact'>
        <h2>Contact Me</h2>

        <div className='contact-content'>
            <div style={{flex:1}}>
                <ContactCard 
                    iconUrl={coImg1}
                    text="https://github.com/SasiduNimesh"
                />
                <ContactCard 
                    iconUrl={coImg2}
                    text="https://lk.linkedin.com/in/sasindu-nimesh"
                />
            </div>
            <div style={{flex:1}} className='contact-from-content'>
                <ContactFrom />
            </div>
        </div>
    </section>
  )
}

export default Contact;