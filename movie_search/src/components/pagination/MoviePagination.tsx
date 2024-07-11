import useMovieContext from "../../hooks/useMovieContext"
import { calculateTotalPages } from "../../utils/paginationHelper"

const MoviePagination = () => {
    const { state: { totalResults, currentPage } } = useMovieContext()

    const totalPages = calculateTotalPages(totalResults)
    const createBUttonArray = (totalPages: number) => {
        return Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
            return <button key={page + 'moviepagination'}>{page}</button>
        })
    }

    // const handleNext = () => {
    //     setPage(page + 1)
    // }
    // const handlePrev = () => {
    //     setPage(page - 1)
    // }
    return (
        <div>
            {/* <button onClick={handlePrev}>Previous</button> */}
            {createBUttonArray(totalPages)}
            {/* <button onClick={handleNext}>Next</button> */}
            
        </div>
    )
}

export default MoviePagination