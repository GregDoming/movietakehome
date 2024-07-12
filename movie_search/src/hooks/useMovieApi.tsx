import axios from 'axios';
import { useContext, useEffect, useRef } from 'react';
import { MovieListContext } from '../contexts/MovieListContext';
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { movieUrlEditor } from '../utils/urlGeneratorHelper';
import useMovieContext from './useMovieContext';
import { SET_ERROR, SET_MOVIES } from '../reducer/actionTypes';

const useMovieApi = (query: string) => {
    const { dispatch } = useContext(MovieListContext);
    const { state: { currentPage } } = useMovieContext()
    const isFirstRender = useRef(true)

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_MOVIE_DB_TOKEN}`
        }
    };

    const url = movieUrlEditor({ query: query, page: currentPage})

    type FetchMovies = () => Promise<{}>;

    const fetchMovies = async () => {
        const response = await axios.get(url, options);
        return response.data;
    }

    interface QueryOptions extends UseQueryOptions {
        queryKey: ['movies', string];
        queryFn: FetchMovies;
        enabled?: boolean;
        staleTime?: number;
        cacheTime?: number;
        onError?: (error: Error) => void;
      }

      const { data, error, isLoading, refetch } = useQuery({
        queryKey: ['movies', url],
        queryFn: fetchMovies,
        enabled: false,
        staleTime: 1000 * 60 * 5, // 5 minutes
        cacheTime: 1000 * 60 * 10, // 10 minutes
        onError: (error: any) => {
            dispatch({ type: SET_ERROR, payload: error });
        },
        initialData: { results: [], total_results: 0 }
    } as QueryOptions);

    //structore of return value from, movies is messy so ignoring typscript complaints about it in this file. If there was more control over
    //the api response I would have a more structured data type

    useEffect(() => {
     // @ts-ignore comment
        if (data?.results?.length) {
     // @ts-ignore comment
            dispatch({ type: SET_MOVIES, payload: { movies: data.results, totalResults: data.total_results } });
        }
    }, [data])

    //Listens to currentPage changes refetches data with new page number and updates state
    useEffect(() => {
        (async () => {
            if (isFirstRender.current) {
                isFirstRender.current = false
                return;
            }
            await refetch()
     // @ts-ignore comment
            if (data?.results?.length) {
     // @ts-ignore comment
                dispatch({ type: 'SET_MOVIES', payload: { movies: data.results, totalResults: data.total_results }});
            }
        })()
    },[currentPage])

    return { data, error, isLoading, refetch };
}

export default useMovieApi;