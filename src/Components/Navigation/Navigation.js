import { useState } from "react";
import './Navigation.scss'
import { Link } from "react-router-dom";

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(!isOpen);
    };
  
        return (
            <div className="burger-menu">
              <button className="burger-menu-btn" onClick={handleClick}>
                {isOpen ? 'X' : 'Menu'}
              </button>
              {isOpen && (
                <ul className="burger-menu-list">
                    <Link to='/'>
                  <li className="burger-menu-item"
                  onClick={handleClick}>Accueil</li>
                    </Link>
                    <Link to='projets'>
                  <li className="burger-menu-item"
                  onClick={handleClick}>Projets</li>
                    </Link>
                    <Link to='competences'>
                  <li className="burger-menu-item"
                  onClick={handleClick}>Compétences</li>
                  </Link>
                  <Link to='contact'>
                  <li className="burger-menu-item"
                  onClick={handleClick}>Contact</li>
                  </Link>
                </ul>
              )}
            </div>
          );
        }

export default Navigation;
