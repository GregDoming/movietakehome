export const calculateTotalPages = (totalResults: number, resultsPerPage: number = 10) => {
    return Math.ceil(totalResults / resultsPerPage)
}