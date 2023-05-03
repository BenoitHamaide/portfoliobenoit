
import lndn from '../assets/lndn.png';
import ktc from '../assets/ktc.png';
import './Carousel.scss';

function Carousel() {
    // { id: 1, src: lndn, link: 'http://lanuitdunecromancien.surge.sh' },
    // { id: 2, src: ktc, link: 'http://killteamcompanion.surge.sh' },
    return (
        <div className="image-block-container">
            <div className='element1'>
          <a href="http://lanuitdunecromancien.surge.sh" target="_blank" rel="noopener noreferrer">
            <img src={lndn} alt="Image 1" className="image-block__image" />
          </a>
          <p className="image-block__description">
            Un livre dont vous êtes le héros ça vous dis quelque chose ? Ces livre jeu/aventure ont bercé mon enfance, il s'agit ici dans cette application en mobile first
            de remplacer la feuille d'aventure présente dans le livre, également le crayon et les dés.
            Passioné de jeu de société je code des App companion !
          </p>
          </div>
          <div className='element2'>
          <a href="http://killteamcompanion.surge.sh" target="_blank" rel="noopener noreferrer">
            <img src={ktc} alt="Image 2" className="image-block__image" />
          </a>
          <p className="image-block__description">
            Qui ne connaît pas Warhammer ? Le célèbre jeu de figurines ! Ici une App Companion pour la version KillTeam de warhammer, cela permet de 
            gerer sa team, ses points de vie et bien plus !
          </p>
          </div>
        </div>
      );
    }

export default Carousel;

