**Installation Prerequisites**
Node.js (v14.x or higher) npm (v6.x or higher) or yarn (v1.x or higher) 
Steps: 
Clone Repository git clone https://github.com/yourusername/movie-app.git 
cd movie-app 
npm install

**Technologies:** 
React 18.3.1 Vite Typescript Jest React Query v5

**Features:** 
Movie Search: Search for a movie by keyword Search displays a list of movies matching keyword with movie title, movie overview and movie release date  
Pagination: Results are paginated at 10 results per page
Owned checkbox: User can save a list of the movies they own which will persist in localstorage
API: API calls are cached (10 minutes)
State Management: Using the provider pattern with React context

**API**
The API is found here (https://developer.themoviedb.org/reference/search-movie). We are using the GET Movie api call under the SEARCH Collection. The GET call will return a list of 20 movies. Multiple API calls are required to get entire list which will get fired when 
the user changes the page using pagination.

Here is an Example of the retrun:

<img width="578" alt="image" src="https://github.com/user-attachments/assets/292de4eb-e25e-4ef2-8f15-1c1d46b21e62">

Here is are the query params for the GET call:

<img width="548" alt="image" src="https://github.com/user-attachments/assets/8edac1c0-0798-4d56-b537-e70e898c5c6b">

For local development it is recommended to sign up and get an api access token if multiple developers will be working on project.



The movie id **CAN** change so make sure to hit the GET Movie List API call uinder the CHANGES section periodically to get a list of the changed movie id's top update any DB that is storing them.

**Notable Files**

_useMovieApi_: In the hooks directory is a hook that houses our API logic and API call caching. It also has a listener for changes to currentPage in state which will make the relevant GET call

_urlGeneratorHelper_: In the utls directory. To add more query parameters to GET movies api call changes should be made here 

**Enhancements:**

Adding Favorites and Wishlist checkboxes

Adding a user page that could display the different "Favorites" , "Wishlist", and "Owned" movies of a user (make sure to add a feature to check movie id's if we are persisting movies https://developer.themoviedb.org/reference/changes-movie-list) 



