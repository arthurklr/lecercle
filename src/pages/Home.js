import React, { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import filmsData from '../data/films.json';
import './Home.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Load movies data
    setMovies(filmsData.movies);
  }, []);

  return (
    <div className="home">
      <Carousel movies={movies} />
    </div>
  );
};

export default Home;
