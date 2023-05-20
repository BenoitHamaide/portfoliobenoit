import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Divider, IconButton, FormControlLabel, Switch, Icon } from '@mui/material';
import './Navigation.scss';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../../App.scss'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness3Icon from '@mui/icons-material/Brightness3';

function Navigation({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (

    <div className="burger-menu" ref={menuRef}>
      <IconButton
        className={`burger-menu-btn ${isOpen ? 'open' : ''}`}
        onClick={handleClick}
      >
        {isOpen ? (
          <CloseIcon
            onClick={(event) => {
              event.stopPropagation();
              handleClick();
            }}
          />
        ) : (
          <MenuIcon
            className="menuIcon"
            onClick={(event) => {
              event.stopPropagation();
              handleClick();
            }}
          />
        )}
      </IconButton>

      {isOpen && (
        <div className="menu-overlay">
          <List className="nav" component="nav">
            <ListItem button component={Link} to="/" onClick={handleLinkClick}>
              <ListItemText primary="Accueil" className="hover-text" />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to="/projets" onClick={handleLinkClick}>
              <ListItemText primary="Projets" className="hover-text" />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to="/competences" onClick={handleLinkClick}>
              <ListItemText primary="Compétences" className="hover-text" />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to="/contact" onClick={handleLinkClick}>
              <ListItemText primary="Contact" className="hover-text" />
            </ListItem>
          </List>
        </div>
      )}
    <div className='container1'>
    <span style={{color: darkMode ? 'grey' : 'yellow'}}><WbSunnyIcon/></span>
    <div className='switch-checkbox'>
  
      <label className='switch'>
      <input type='checkbox'
      checked={darkMode}
onChange={toggleDarkMode}
/> 
      <span className='slider round'></span>
      </label>
      </div>
      <span style={{color: darkMode ? 'whitesmoke' : 'grey'}}> <Brightness3Icon/></span>
      </div>
    </div>
 
  );
}

export default Navigation;
