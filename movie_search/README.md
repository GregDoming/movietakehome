Installation
Prerequisites:
Node.js (v14.x or higher)
npm (v6.x or higher) or yarn (v1.x or higher)
Steps:
Clone Repository
git clone https://github.com/yourusername/movie-app.git
cd movie-app
npm install

Technologies:
React 18.3.1
Vite
Typescript
Jest
React Query v5



Features:
Movie Search: Search for a movie by keyword
Search displays a list of movies matching keyword with movie title, movie overview and movie release date
User can save a list of the movies they own which will persist in localstorage
API calls are cached (10 minutes)
API Reference:

The API is found here https://developer.themoviedb.org/reference/discover-movie.
We are using the GET Movie api call under the SEARCH Collection.

Enhancements:
