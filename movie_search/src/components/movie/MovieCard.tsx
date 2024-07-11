import { useState } from 'react'
import './movieCard.css'

type Movie = {
    title: string;
    overview: string;
    release_date: string;
}

const MovieCard = ({ movie }: { movie: Movie }) => {
    const [owned, setOwned] = useState(false)
    return (
        <div className="movie-card">
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p>Date realeased: {movie.release_date}</p>
            <div className="checkbox-container">
                <label>Owned </label>
                <input type="checkbox" checked={owned} onChange={() => setOwned(!owned)} />
            </div>
        </div>
    )
}

export default MovieCard