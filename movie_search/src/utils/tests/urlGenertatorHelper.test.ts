import { movieUrlEditor } from '../urlGeneratorHelper'; 

describe('movieUrlEditor', () => {
  it('should return a URL with default page and includeAdult values', () => {
    const url = movieUrlEditor({ query: 'Inception' });
    expect(url).toBe('https://api.themoviedb.org/3/search/movie?query=Inception&include_adult=false&language=en-US&page=1');
  });

  it('should return a URL with specified page value', () => {
    const url = movieUrlEditor({ query: 'Inception', page: 3 });
    expect(url).toBe('https://api.themoviedb.org/3/search/movie?query=Inception&include_adult=false&language=en-US&page=2');
  });

  it('should return a URL with specified includeAdult value', () => {
    const url = movieUrlEditor({ query: 'Inception', includeAdult: true });
    expect(url).toBe('https://api.themoviedb.org/3/search/movie?query=Inception&include_adult=true&language=en-US&page=1');
  });

  it('should return a URL with specified page and includeAdult values', () => {
    const url = movieUrlEditor({ query: 'Inception', page: 5, includeAdult: true });
    expect(url).toBe('https://api.themoviedb.org/3/search/movie?query=Inception&include_adult=true&language=en-US&page=3');
  });

  it('should handle edge cases for page value', () => {
    const url = movieUrlEditor({ query: 'Inception', page: 0 });
    expect(url).toBe('https://api.themoviedb.org/3/search/movie?query=Inception&include_adult=false&language=en-US&page=1');
  });

  it('should handle negative page values by treating them as 1', () => {
    const url = movieUrlEditor({ query: 'Inception', page: -5 });
    expect(url).toBe('https://api.themoviedb.org/3/search/movie?query=Inception&include_adult=false&language=en-US&page=1');
  });
});
