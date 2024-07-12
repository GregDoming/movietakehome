import { render, screen, fireEvent } from '@testing-library/react';
import  '@testing-library/jest-dom';
import MovieCard from '../MovieCard';

const movie = {
  title: 'Inception',
  overview: 'A mind-bending thriller',
  release_date: '2010-07-16',
  id: 1,
};

describe('MovieCard', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should render movie details', () => {
    render(<MovieCard movie={movie} />);
    
    expect(screen.getByText('Inception')).toBeInTheDocument();
    expect(screen.getByText('A mind-bending thriller')).toBeInTheDocument();
    expect(screen.getByText('Date released: 2010-07-16')).toBeInTheDocument();
  });

  it('should load owned state from local storage', () => {
    localStorage.setItem('ownedMovies', JSON.stringify({ 1: true }));
    render(<MovieCard movie={movie} />);
    
    expect(screen.getByLabelText('Owned')).toBeChecked();
  });

  it('should save owned state to local storage when checkbox is clicked', () => {
    render(<MovieCard movie={movie} />);
    
    const checkbox = screen.getByLabelText('Owned');
    fireEvent.click(checkbox);
    
    expect(checkbox).toBeChecked();
    expect(JSON.parse(localStorage.getItem('ownedMovies') || '{}')).toEqual({ 1: true });
  });

  it('should toggle owned state in local storage when checkbox is clicked twice', () => {
    render(<MovieCard movie={movie} />);
    
    const checkbox = screen.getByLabelText('Owned');
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(JSON.parse(localStorage.getItem('ownedMovies') || '{}')).toEqual({ 1: true });
    
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(JSON.parse(localStorage.getItem('ownedMovies') || '{}')).toEqual({ 1: false });
  });
});
