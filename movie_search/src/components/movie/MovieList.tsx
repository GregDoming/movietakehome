
import { useEffect } from "react"
import useMovieContext from "../../hooks/useMovieContext"
import useMovieApi from "../../hooks/useMovieApi"
import MovieCard from "./MovieCard"
import MoviePagination from "../pagination/MoviePagination"
import { movieUrlEditor } from "../../utils/urlGeneratorHelper"

const MovieList = () => {
    const { state: { movies, loading, error, query, totalResults, currentPage } } = useMovieContext()
    const fetchMovieData = useMovieApi(movieUrlEditor({query: query}))
    console.log(movies)
    console.log(totalResults)
    console.log(currentPage)

    useEffect(() => {
        if (query) {
            fetchMovieData()
        }
    }, [query])

    return (
        <div>
            <h1>MovieList</h1>
           {movies.map((movie: any) => <MovieCard movie={movie} key={movie.id} />)}
           <MoviePagination/>
        </div>
    )
}

export default MovieList