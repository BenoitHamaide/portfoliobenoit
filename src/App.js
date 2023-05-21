import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import Accueil from './Components/Accueil/Accueil';
import Projets from './Components/Projets';
import Competences from './Components/Competences';
import Contact from './Components/Contact';
import Navigation from './Components/Navigation/Navigation';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? 'dark-mode' : 'App'}>
      <div className="background"></div>
      <div className="content">
        <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;
