import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/films">Films</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">À propos</Link>
    </nav>
  </header>
);

export default Header;
