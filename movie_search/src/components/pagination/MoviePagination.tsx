import { useState, useContext } from "react"
import { calculateTotalPages } from "../../utils/paginationHelper"
import { MovieListContext } from "../../contexts/MovieListContext"
import useMovieContext from "../../hooks/useMovieContext"

const MoviePagination = () => {
    const { state: { totalResults } } = useMovieContext()
    const { dispatch } = useContext(MovieListContext);

    const totalPages = calculateTotalPages(totalResults)
    const createButtonArray = (totalPages: number) => {
        return Array.from({ length: totalPages }, (_, i) => i + 1).map((paginationPage) => {
            return <button key={paginationPage + 'moviepagination'} onClick={() => handlePaginationClick(paginationPage)}>{paginationPage}</button>
        })
    }

    const handlePaginationClick = async (page: number) => {
        await dispatch({ type: 'SET_PAGE_NUMBER', payload: page })
        // refetch()
    }

    return (
        <div>
            {/* <button onClick={handlePrev}>Previous</button> */}
            {createButtonArray(totalPages)}
            {/* <button onClick={handleNext}>Next</button> */}
            
        </div>
    )
}

export default MoviePagination