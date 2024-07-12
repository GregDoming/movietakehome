import { useContext } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieListProvider, { MovieListContext } from '../MovieListContext';
import { SET_QUERY } from '../../reducer/actionTypes';

const TestComponent = () => {
    const { state, dispatch } = useContext(MovieListContext);
  
    return (
      <div>
        <div data-testid="query">{state.query}</div>
        <button onClick={() => dispatch({ type: SET_QUERY, payload: 'Inception' })}>
          Set Query
        </button>
      </div>
    );
  };
  
  describe('MovieListProvider', () => {
    it('should provide initial state', () => {
      render(
        <MovieListProvider>
          <TestComponent />
        </MovieListProvider>
      );
  
      expect(screen.getByTestId('query')).toHaveTextContent('');
    });
  
    it('should update state when dispatch is called', () => {
      render(
        <MovieListProvider>
          <TestComponent />
        </MovieListProvider>
      );
  
      const button = screen.getByText('Set Query');
      fireEvent.click(button);
  
      expect(screen.getByTestId('query')).toHaveTextContent('Inception');
    });
  });