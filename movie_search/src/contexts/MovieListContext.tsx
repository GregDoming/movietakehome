import { createContext, useReducer } from "react";
import { MovieListReducer, initialState } from "../reducer/MovieListReducer";

export const MovieListContext = createContext({} as any);

const MovieListProvider = ({children}) => {
    const [state, dispatch] = useReducer(MovieListReducer, initialState);  

    return (
        <MovieListContext.Provider value={{state, dispatch}}>
            {children}
        </MovieListContext.Provider>
    )
}

export default MovieListProvider