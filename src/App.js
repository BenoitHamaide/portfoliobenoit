import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Importez les composants de chaque page ici
import Accueil from './Components/Accueil/Accueil';
import Projets from './Components/Projets';
import Competences from './Components/Competences';
import Contact from './Components/Contact';
import Navigation from './Components/Navigation/Navigation';


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
