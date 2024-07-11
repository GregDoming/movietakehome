import { useContext } from 'react';
import { MovieListContext } from '../contexts/MovieListContext';
import axios from 'axios';

const useMovieApi = (
    url: string,
) => {
    const { dispatch } = useContext(MovieListContext);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzAxMzY0ZDg0M2Q2MGFkNDA4MjQzNWMyMGEzM2ZkYiIsIm5iZiI6MTcyMDY0MTk5OC44MjQ0MDIsInN1YiI6IjY2OGVlOTI5MTAxZGE2NGQzOTYyMWNjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AWwDFuzXmsnMLWMnaucTJuE2-aqo-70iv4PkdQh41D0'
        }
    };

    const fetchMovieData = async () => {
        dispatch({ type: 'SET_LOADING', payload: true })
        try {
            const response = await axios.get(url, options)
            dispatch({ type: 'SET_MOVIES', payload: {movies: response.data.results, totalResults: response.data.total_results}})
        } catch (error: any) {
            dispatch({ type: 'SET_ERROR', payload: error })
        }
        dispatch({ type: 'SET_LOADING', payload: false })
    }

    return fetchMovieData
}

export default useMovieApi;