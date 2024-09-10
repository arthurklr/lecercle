// src/components/Carousel.js
import React, { useEffect, useState } from 'react';
import './Carousel.css'; // Styles spécifiques au carrousel

function Carousel() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Charger les données depuis le fichier JSON
    fetch('/path/to/films.json')  // Mets le bon chemin pour le fichier JSON
      .then((response) => response.json())
      .then((data) => setMovies(data.movies));
  }, []);

  return (
    <div className="carousel">
      {movies.map((movie) => (
        <div className="carousel-item" key={movie.id}>
          <img src={movie.picture.medium} alt={movie.title} />
          <h2>{movie.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default Carousel;
