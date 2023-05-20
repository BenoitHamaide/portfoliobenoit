import { Button } from '@mui/material';
import './Contact.scss'
import { Mail } from '@mui/icons-material';

function Contact() {
    return (
        <div className='contact'>
            <h1>Contact</h1>
            <div className='mail'>
            <Button variant='contained' size='medium' color='success' endIcon={<Mail />}> <a href={`mailto:${'hamaidebenoit@gmail.com'}`}>
     Envoyez moi un mail
    </a></Button></div>
        </div>
    );
}

export default Contact