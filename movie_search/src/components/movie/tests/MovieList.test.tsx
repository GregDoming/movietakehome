import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieList from '../MovieList';
import useMovieContext from '../../../hooks/useMovieContext';
import { splitArray } from '../../../utils/paginationHelper';
import { useIsFetching } from '@tanstack/react-query';

jest.mock('../../../hooks/useMovieContext');
jest.mock('../../../utils/paginationHelper');
jest.mock('@tanstack/react-query');

const mockMovies = [
  { id: 1, title: 'Inception', overview: 'A mind-bending thriller', release_date: '2010-07-16' },
  { id: 2, title: 'The Matrix', overview: 'A hacker discovers the truth about reality', release_date: '1999-03-31' },
  { id: 3, title: 'Interstellar', overview: 'A journey beyond the stars', release_date: '2014-11-07' }
];

describe('MovieList', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render loading when fetching', () => {
    (useIsFetching as jest.Mock).mockReturnValue(true);
    (useMovieContext as jest.Mock).mockReturnValue({
      state: {
        movies: [],
        totalResults: 0,
        currentPage: 1
      }
    });
    render(<MovieList />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render movie list', () => {
    (useIsFetching as jest.Mock).mockReturnValue(false);
    (useMovieContext as jest.Mock).mockReturnValue({
      state: {
        movies: mockMovies,
        totalResults: 3,
        currentPage: 1
      }
    });
    (splitArray as jest.Mock).mockReturnValue({
      firstArr: [mockMovies[0], mockMovies[1]],
      secondArr: [mockMovies[2]]
    });
    render(<MovieList />);
    expect(screen.getByText('Movie List')).toBeInTheDocument();
    expect(screen.getByText('Inception')).toBeInTheDocument();
    expect(screen.getByText('The Matrix')).toBeInTheDocument();
    expect(screen.getByText('Total Results: 3')).toBeInTheDocument();
  });

  it('should render movies correctly based on current page', () => {
    (useIsFetching as jest.Mock).mockReturnValue(false);
    (splitArray as jest.Mock).mockReturnValue({
      firstArr: [mockMovies[0], mockMovies[1]],
      secondArr: [mockMovies[2]]
    });

    // Initial render with page 1 (odd page)
    (useMovieContext as jest.Mock).mockReturnValue({
      state: {
        movies: mockMovies,
        totalResults: 3,
        currentPage: 1
      }
    });
    const { rerender } = render(<MovieList />);
    expect(screen.getByText('Inception')).toBeInTheDocument();
    expect(screen.getByText('The Matrix')).toBeInTheDocument();
    expect(screen.queryByText('Interstellar')).not.toBeInTheDocument();

    // Rerender with page 2 (even page)
    (useMovieContext as jest.Mock).mockReturnValue({
      state: {
        movies: mockMovies,
        totalResults: 3,
        currentPage: 2
      }
    });
    rerender(<MovieList />);
    expect(screen.queryByText('Inception')).not.toBeInTheDocument();
    expect(screen.queryByText('The Matrix')).not.toBeInTheDocument();
    expect(screen.getByText('Interstellar')).toBeInTheDocument();
  });
});
