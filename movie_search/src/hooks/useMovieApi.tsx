import axios from 'axios';
import { useContext, useEffect, useRef } from 'react';
import { MovieListContext } from '../contexts/MovieListContext';
import { useQuery } from "@tanstack/react-query";
import { movieUrlEditor } from '../utils/urlGeneratorHelper';
import useMovieContext from './useMovieContext';

const useMovieApi = (query: string) => {
    const { dispatch } = useContext(MovieListContext);
    const { state: { currentPage } } = useMovieContext()
    const isFirstRender = useRef(true)

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzAxMzY0ZDg0M2Q2MGFkNDA4MjQzNWMyMGEzM2ZkYiIsIm5iZiI6MTcyMDY0MTk5OC44MjQ0MDIsInN1YiI6IjY2OGVlOTI5MTAxZGE2NGQzOTYyMWNjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AWwDFuzXmsnMLWMnaucTJuE2-aqo-70iv4PkdQh41D0'
        }
    };

    const url = movieUrlEditor({ query: query, page: currentPage})

    const fetchMovies = async () => {
        const response = await axios.get(url, options);
        console.log(response.data);
        return response.data;
    }

    const { data, error, isLoading, refetch } = useQuery({
        queryKey: ['movies', url],
        queryFn: fetchMovies,
        enabled: false,
        staleTime: 1000 * 60 * 5, // 5 minutes
        cacheTime: 1000 * 60 * 10, // 10 minutes
        onError: (error: any) => {
            dispatch({ type: 'SET_ERROR', payload: error });
        },
    });

    useEffect(() => {
        if (data?.results?.length) {
            dispatch({ type: 'SET_MOVIES', payload: { movies: data.results, totalResults: data.total_results } });
        }
    }, [data])

    useEffect(() => {
        (async () => {
            if (isFirstRender.current) {
                isFirstRender.current = false
                return;
            }
            await refetch()
            if (data?.results?.length) {
                dispatch({ type: 'SET_MOVIES', payload: { movies: data.results, totalResults: data.total_results }});
            }
        })()
    },[currentPage])

    return { data, error, isLoading, refetch };
}

export default useMovieApi;