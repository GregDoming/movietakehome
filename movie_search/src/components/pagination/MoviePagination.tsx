import { useContext } from "react"
import { calculateTotalPages } from "../../utils/paginationHelper"
import { MovieListContext } from "../../contexts/MovieListContext"
import useMovieContext from "../../hooks/useMovieContext"
import './moviePagination.css'

interface MoviePaginationProps {
    keyPrefix: string;
};

const MoviePagination : React.FC<MoviePaginationProps> = (keyPrefix) => {
    const { state: { totalResults } } = useMovieContext()
    const { dispatch } = useContext(MovieListContext);

    const totalPages = calculateTotalPages(totalResults)
    const createButtonArray = (totalPages: number) => {
        return Array.from({ length: totalPages }, (_, i) => i + 1).map((paginationPage) => {
            return <button key={`${paginationPage} + ${keyPrefix} + moviepagination`} onClick={() => handlePaginationClick(paginationPage)}>{paginationPage}</button>
        })
    }

    //There is a listener in the useMovieApi hook that listens to currentPage changes and refetches data with new page number
    const handlePaginationClick = async (page: number) => {
        await dispatch({ type: 'SET_PAGE_NUMBER', payload: page })
    }

    return (
        <div className="pagination-container">
            {/* <button onClick={handlePrev}>Previous</button> */}
                {createButtonArray(totalPages)}
            {/* <button onClick={handleNext}>Next</button> */}
        </div>
    )
}

export default MoviePagination