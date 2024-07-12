import React, { createContext, useReducer, FC } from "react";
import { MovieListReducer, initialState } from "../reducer/MovieListReducer";

export const MovieListContext = createContext({} as any);

interface Props {
    children?: React.ReactNode
    // any props that come into the component
}

const MovieListProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(MovieListReducer, initialState);  

    return (
        <MovieListContext.Provider value={{state, dispatch}}>
            {children}
        </MovieListContext.Provider>
    )
}

export default MovieListProvider