interface urlOptions {
    query: string;
    page?: number;
    includeAdult?: boolean;
}

/**
 * Edits url and has optional parameters.
 *
 * @param {string} query - The search query for fetching movies.
 * @param {number} [page=1] - The page number for pagination (default is 1).
 * @param {boolean} [includeAdult=false] - Whether to include adult movies in the results (default is false).
 * @returns {Promise<Object>} A promise that resolves to the movie data.
 */


export const movieUrlEditor = ({ query, page = 1, includeAdult = false }: urlOptions) => {
    if (page <= 0) page = 1;
    let actualPage = Math.ceil(page / 2);
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=${includeAdult}&language=en-US&page=${actualPage}`;
    return url;
}