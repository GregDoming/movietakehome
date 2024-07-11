import { useState } from 'react'

type Movie = {
    title: string;
    overview: string;
    release_date: string;
}

const MovieCard = ({ movie }: { movie: Movie }) => {
    const [owned, setOwned] = useState(false)
    return (
        <div>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p>{movie.release_date}</p>
            <label>Owned
            <input type="checkbox" checked={owned} onChange={() => setOwned(!owned)} />
            </label>
        </div>
    )
}

export default MovieCard