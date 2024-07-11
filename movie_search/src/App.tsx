import MovieListProvider from "./contexts/MovieListContext"
import Input from "./components/search/input"
import MovieList from "./components/movie/MovieList"

function App() {
  return (
    <MovieListProvider>
      <Input/>
      <MovieList/>
    </MovieListProvider>
  )
}

export default App
