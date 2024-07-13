import useMovieContext from "../../hooks/useMovieContext"
import MovieCard from "./MovieCard"
import MoviePagination from "../pagination/MoviePagination"
import { splitArray } from "../../utils/paginationHelper"
import { useIsFetching } from "@tanstack/react-query";
import "./movieList.css"

const MovieList = () => {
    const { state: { movies, totalResults, currentPage } } = useMovieContext()

    const handleMovieArray = (movies: []) => {
        const splitResult = splitArray(movies);
        const firstHalfArr = splitResult ? splitResult.firstArr : [];
        const secondHalfArr = splitResult ? splitResult.secondArr : [];
        if (currentPage % 2 === 0) {
            return secondHalfArr.map((movie: any) => <MovieCard movie={movie} key={movie.id + 'top'} />);
        } else {
            return firstHalfArr.map((movie: any) => <MovieCard movie={movie} key={movie.id} />);
        }
    }

    // useIsFetching causing additional renders known issue to fix in future 


    return (
        <>
            {useIsFetching()
                ? <div className="movie-list"><h1>Loading...</h1></div>
                : <div className="movie-list">
                    <h1>Movie List</h1>
                    <MoviePagination keyPrefix="movieList1" />
                    {handleMovieArray(movies)}
                    {totalResults ? <h3>Total Results: {totalResults}</h3> : null}
                    <MoviePagination keyPrefix="movieList2" />
                </div>

            }
        </>
    )
}

export default MovieList;