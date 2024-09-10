// src/pages/Films.js
import React, { useEffect, useState } from 'react';
import './Films.css'; // Styles pour les films

function Films() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Charger les données depuis le fichier JSON
    fetch('/path/to/films.json')  // Mets le bon chemin pour le fichier JSON
      .then((response) => response.json())
      .then((data) => setMovies(data.movies));
  }, []);

  return (
    <div className="films">
      <h2>Films disponibles</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id} className="film-item">
            <h3>{movie.title}</h3>
            <p>Prochaines séances: {movie.screenings.map(s => new Date(s.start).toLocaleString()).join(', ')}</p>
            <p>Durée: {movie.duration} min</p>
            <p>Genres: {movie.genres.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Films;
