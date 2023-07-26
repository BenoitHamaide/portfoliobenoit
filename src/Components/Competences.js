import cvBenoit from '../assets/cvbenoit.jpg'
import './Competences.scss'

function Competences() {
    return (
        <div className='Competences'>
            <div className='title'>
            <h1>Compétences</h1>
            </div>
            <div className='cv'>
           <img src={cvBenoit} alt="cv"/>
           </div>
        </div>
    );
}

export default Competences