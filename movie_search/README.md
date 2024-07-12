# Movie App

A React-based application for searching and managing your movie collection.

## Installation Prerequisites

- **Node.js** (v14.x or higher)
- **npm** (v6.x or higher) or **yarn** (v1.x or higher)

## Installation Steps

1. **Clone Repository**
    ```bash
    git clone https://github.com/yourusername/movie-app.git
    cd movie-app
    ```

2. **Install Dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

## Technologies Used

- **React** 18.3.1
- **Vite**
- **TypeScript**
- **Jest**
- **React Query** v5

## Features

- **Movie Search:** 
  - Search for a movie by keyword.
  - Displays a list of movies matching the keyword with movie title, overview, and release date.

- **Pagination:** 
  - Results are paginated with 10 results per page.

- **Owned Checkbox:** 
  - Users can save a list of the movies they own, which persists in local storage.

- **API Caching:** 
  - API calls are cached for 10 minutes.

- **State Management:** 
  - Using the provider pattern with React context.

## API Integration

We use the [The Movie Database (TMDB) API](https://developer.themoviedb.org/reference/search-movie) for movie data. The app makes a GET call under the SEARCH collection, which returns a list of 20 movies. Multiple API calls are made to get the entire list as the user paginates.

### Example Response

![Example Response](https://github.com/user-attachments/assets/292de4eb-e25e-4ef2-8f15-1c1d46b21e62)

### Query Parameters for GET Call

![Query Parameters](https://github.com/user-attachments/assets/8edac1c0-0798-4d56-b537-e70e898c5c6b)

### API Token

For local development, it is recommended to sign up and get an API access token if multiple developers are working on the project.
Place your new API token in .env file under "VITE_MOVIE_DB_TOKEN

### Note on Movie IDs

The movie IDs **can** change, so make sure to periodically hit the GET Movie List API call under the CHANGES section to update any databases storing them.

## Notable Files

- **useMovieApi:** 
  - Located in the `hooks` directory. This hook contains our API logic and caching. It also listens for changes to the current page in the state and makes the relevant GET call.

- **urlGeneratorHelper:** 
  - Located in the `utils` directory. To add more query parameters to GET movie API calls, make changes here.

## Enhancements

- **Testing:**
  - Run tests before committing any code to ensure functionality:
    ```bash
    npm test
    # or
    yarn test
    ```

- **Favorites and Wishlist Checkboxes:** 
  - Adding checkboxes to mark movies as favorites or add them to a wishlist.

- **User Page:** 
  - A user page to display different categories like "Favorites", "Wishlist", and "Owned" movies.
  - Ensure to add a feature to check movie IDs if persisting movies. Refer to [TMDB API](https://developer.themoviedb.org/reference/changes-movie-list).

---

Feel free to contribute to this project by forking the repository and creating pull requests. For any issues or feature requests, please open an issue on GitHub.