import React from 'react';
import './Carousel.css';

const Carousel = ({ movies }) => (
  <div className="carousel">
    {movies.map((movie) => (
      <div className="carousel-item" key={movie.id}>
        <img src={movie.picture.big} alt={movie.title} />
        <h3>{movie.title}</h3>
      </div>
    ))}
  </div>
);

export default Carousel;
