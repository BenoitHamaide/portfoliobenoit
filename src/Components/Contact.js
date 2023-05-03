import './Contact.scss'

function Contact() {
    return (
        <div className='contact'>
            <h1>Contact</h1>
            <div className='mail'>
            <a href={`mailto:${'hamaidebenoit@gmail.com'}`}>
     Envoyez moi un mail
    </a></div>
        </div>
    );
}

export default Contact