import React from 'react';
import './contactFrom.css';

const ContactFrom = () => {
  return (
    <div className='contact-from-content'>
        <from>
            <div className='name-details'>
                <input type='text' name='firstName' placeholder='Enter the first Name' />
                <input type='text' name='lastName' placeholder='Enter the last Name' />
            </div>
            <input type='text' name='email' placeholder='Email' />
            <textarea type='text' name='message' placeholder='Message'></textarea>
            <button>SEND</button>
        </from>
    </div>
  )
}

export default ContactFrom;