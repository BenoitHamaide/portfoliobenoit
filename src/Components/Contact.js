import { Button } from '@mui/material';
import './Contact.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useState } from 'react';
import CallIcon from '@mui/icons-material/Call';
import ContactForm from './ContactForm';

function Contact() {
    const [showPhoneNumber, setShowPhoneNumber] = useState(false);
    const phoneNumber = '0629481929';
  
    const handleClick = () => {
        setShowPhoneNumber(!showPhoneNumber);
      };
      const handlePhoneClick = (event) => {
        event.stopPropagation(); // Empêche la propagation du clic vers le bouton parent
      };
    return (
        <div className='contactContainer'>
        <div className='contact'>
            <h1>Contact</h1>
            <div className='mail'>
            </div>
        </div>
        <div className='social'>
        <Button 
        target="_blank"
        className='linkedin' 
        href="https://linkedin.com/in/benoit-hamaide">{<LinkedInIcon className='link'/>}</Button>
      <a href={`tel:${phoneNumber}`} onClick={handlePhoneClick}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        className={showPhoneNumber ? 'phone-button active' : 'phone-button'}
      >
        {showPhoneNumber ? phoneNumber :<CallIcon />}
      </Button>
    </a>
    </div>
    <ContactForm />
        </div>
    );
}

export default Contact