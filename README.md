# Movie App

A React-based application for searching and managing your movie collection.

## Installation Prerequisites

- **Node.js** (v14.x or higher)
- **npm** (v6.x or higher) or **yarn** (v1.x or higher)

## Installation Steps

1. **Clone Repository**
    ```bash
    git clone https://github.com/yourusername/movie-app.git
    cd movie_search
    npm install
    npm run build
    npm run dev
    navigate to http://localhost:5173/
    ```
    Make sure to use the Develop branch

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
  - Using the provider pattern with React context. Not neccesary for requirements but nice to have assuming app will grow.

## API Integration

We use the [The Movie Database (TMDB) API](https://developer.themoviedb.org/reference/search-movie) for movie data. The app makes a GET call under the SEARCH collection, which returns a list of 20 movies. Multiple API calls are made to get the entire list as the user paginates.

### Example Response

![Example Response](https://github.com/user-attachments/assets/292de4eb-e25e-4ef2-8f15-1c1d46b21e62)

### Query Parameters for GET Call

![Query Parameters](https://github.com/user-attachments/assets/8edac1c0-0798-4d56-b537-e70e898c5c6b)

### API Token

For local development, it is recommended to sign up and get an API access token if multiple developers are working on the project. Place your new API token in `.env` file under `VITE_MOVIE_DB_TOKEN`.

### Note on Movie IDs

The movie IDs **can** change, so make sure to periodically hit the GET Movie List API call under the CHANGES section to update any databases storing them.

## Notable Files

- **useMovieApi:** 
  - Located in the `hooks` directory. This hook contains our API logic and caching. It also listens for changes to the current page in the state and makes the relevant GET call.

- **urlGeneratorHelper:** 
  - Located in the `utils` directory. To add more query parameters to GET movie API calls, make changes here.

## Testing

- **Testing:**
  - Run tests before committing any code to ensure functionality:
    ```bash
    npm test
    # or
    yarn test
    ```

## Enhancements

- **Favorites and Wishlist Checkboxes:** 
  - Adding checkboxes to mark movies as favorites or add them to a wishlist.

- **User Page:** 
  - A user page to display different categories like "Favorites", "Wishlist", and "Owned" movies.
  - Ensure to add a feature to check movie IDs if persisting movies. Refer to [TMDB API](https://developer.themoviedb.org/reference/changes-movie-list).

- **Dark Mode:** 
  - Add a toggle switch to enable dark mode for the application.

- **Movie Details Page:** 
  - Create a detailed view for each movie that displays additional information such as cast, crew, ratings, and trailers.

- **User Authentication:** 
  - Implement user authentication using JWT. Users can sign up, log in, and manage their movie collections.

- **Search History:** 
  - Keep a history of recent searches and allow users to quickly repeat a previous search.

- **Responsive Design:** 
  - Ensure the application is fully responsive and works well on all device sizes.

- **Improved UI/UX:** 
  - Enhance the user interface and experience with animations and better styling.
  - Add loading spinner to increase User Experience for users with slower connections (react query isfetfching was causing toon many rerenders and out of scope to fix) 
  - 
- **Highlighting current pagination page:** 
  - Better user experience
    
- **Pagination:**
  - Add a previous and next to pagination
  - For results that have a lot of pages only show 5ish pagination buttons and add a ...to jump to a page
  - When on a page prefetch the next and previous page (if exists)
  - Add logic to handle if user presses multiple pagination buttons in quick succession.

  -**Sorting/Filtering:**
    - Add filtering options for results per page, and by any data we have from the return of the movie. Title/Year Etc.
  
---

Feel free to contribute to this project by forking the repository and creating pull requests. For any issues or feature requests, please open an issue on GitHub.

---

By incorporating these additional features and enhancements, you can make your Movie App more user-friendly, feature-rich, and visually appealing.
