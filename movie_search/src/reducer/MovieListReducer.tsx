import { SET_QUERY, SET_PAGE_NUMBER, SET_MOVIES, SET_ERROR } from './actionTypes';

const initialState = {
    movies: [],
    query: '',
    totalResults: 0,
    currentPage: 1,
    error: ''
};

type State = {
    movies: any[];
    loading: boolean;
    error: any;
    query: string;
    totalResults: number;
    currentPage: number;
}

type Action = {
    type: string;
    payload: any;
}

const MovieListReducer = (state: State, action: Action) => {
    switch (action.type) {
        case SET_MOVIES:
            return {
                ...state,
                movies: action.payload.movies,
                totalResults: action.payload.totalResults
            };
        case SET_QUERY:
            return {
                ...state,
                query: action.payload
            };
        case SET_PAGE_NUMBER:
            return {
                ...state,
                currentPage: action.payload
            };
            case SET_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}

export { initialState, MovieListReducer };