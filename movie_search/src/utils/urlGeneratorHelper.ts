interface urlOptions {
    query: string;
    page?: number;
    includeAdult?: boolean;
}

export const movieUrlEditor = (urlOptions: urlOptions) => {
    urlOptions = {page: 1, includeAdult: false, ...urlOptions}
    let { query, page, includeAdult } = urlOptions
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=${includeAdult}&language=en-US&page=${page}`
    return url
}

