// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Films from './pages/Films';
import './App.css';  // Ajoute les styles généraux ici

function App() {
  return (
    <Router>
      <header className="header">
        <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/films">Films</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/films" element={<Films />} />
      </Routes>
    </Router>
  );
}

export default App;
