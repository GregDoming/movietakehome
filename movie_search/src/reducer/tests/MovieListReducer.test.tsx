import { SET_QUERY, SET_PAGE_NUMBER, SET_MOVIES, SET_ERROR } from '../actionTypes';
import { initialState, MovieListReducer } from '../MovieListReducer';

describe('MovieListReducer', () => {
  it('should return the initial state', () => {
    expect(MovieListReducer(initialState, { type: '', payload: null })).toEqual(initialState);
  });

  it('should handle SET_MOVIES', () => {
    const movies = [{ title: 'Movie 1' }, { title: 'Movie 2' }];
    const totalResults = 2;
    const action = { type: SET_MOVIES, payload: { movies, totalResults } };
    const expectedState = { ...initialState, movies, totalResults };
    expect(MovieListReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_QUERY', () => {
    const query = 'Inception';
    const action = { type: SET_QUERY, payload: query };
    const expectedState = { ...initialState, query };
    expect(MovieListReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_PAGE_NUMBER', () => {
    const currentPage = 2;
    const action = { type: SET_PAGE_NUMBER, payload: currentPage };
    const expectedState = { ...initialState, currentPage };
    expect(MovieListReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_ERROR', () => {
    const error = 'An error occurred';
    const action = { type: SET_ERROR, payload: error };
    const expectedState = { ...initialState, error };
    expect(MovieListReducer(initialState, action)).toEqual(expectedState);
  });
});
