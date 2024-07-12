import { useState, useEffect } from 'react';
import './movieCard.css';

interface Movie {
  title: string;
  overview: string;
  release_date: string;
  id: number;
}

const MovieCard = ({ movie }: { movie: Movie }) => {
  const [owned, setOwned] = useState(false);

  // Function to save the "owned" state to local storage
  const saveToLocalStorage = (ownedState: boolean) => {
    const savedMovies = JSON.parse(localStorage.getItem('ownedMovies') || '{}') || {};
    savedMovies[movie.id] = ownedState;
    localStorage.setItem('ownedMovies', JSON.stringify(savedMovies));
  };

  // Load the "owned" state from local storage when the component mounts
  useEffect(() => {
    try {
      const savedMovies = JSON.parse(localStorage.getItem('ownedMovies') || '{}') || {};
      if (savedMovies[movie.id] !== undefined) {
        setOwned(savedMovies[movie.id]);
      }
    } catch (error) {
      console.error('Error parsing localStorage data', error);
    }
  }, [movie.id]);

  const handleCheckboxChange = () => {
    saveToLocalStorage(!owned);
    setOwned(!owned);
  };

  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>Date released: {movie.release_date}</p>
      <div className="checkbox-container">
        <label htmlFor={`owned-checkbox-${movie.id}`}>Owned </label>
        <input
          id={`owned-checkbox-${movie.id}`}
          type="checkbox"
          checked={owned}
          onChange={handleCheckboxChange}
        />
      </div>
    </div>
  );
};

export default MovieCard;
