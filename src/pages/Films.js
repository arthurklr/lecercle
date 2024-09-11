import React, { useEffect, useState } from 'react';
import filmsData from '../data/films.json';
import './Films.css';

const Films = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Load movies data
    setMovies(filmsData.movies);
  }, []);

  return (
    <div className="films">
      <h1>Films</h1>
      <div className="films-list">
        {movies.map((movie) => (
          <div className="film-item" key={movie.id}>
            <img src={movie.picture.medium} alt={movie.title} />
            <div className='info_carre'>
                <div className='genre_affiche'><img src='./bobine_film.png' alt='durée film'></img><div>{movie.genres}</div></div>
                <div className='duree_affiche'><img src='./clock.svg' alt='durée film'></img>{movie.hours}h{movie.minutes}min</div>
            </div>
            <div className="film-info">
              <h2>{movie.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Films;
