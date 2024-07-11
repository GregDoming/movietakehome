import { useContext } from 'react';
import { MovieListContext } from '../contexts/MovieListContext';

const useMovieContext = () => {
    const context = useContext(MovieListContext);
    if (!context) {
        throw new Error('useMovieContext must be used within a MovieProvider');
    }
    return context;
}

export default useMovieContext;