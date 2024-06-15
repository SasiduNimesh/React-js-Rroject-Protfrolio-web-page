import React from 'react';
import './contactCard.css';

const ContactCard = ({ iconUrl, text }) => {
  return (
    <div className='contact-details'>
        <div className='icon'>
            <img src={iconUrl} alt=" " />
        </div>
        <p>{text}</p>
    </div>
  )
}

export default ContactCard;