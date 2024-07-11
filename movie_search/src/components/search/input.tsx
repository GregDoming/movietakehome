import { useState } from "react"
import axios from "axios"
import useMovieContext from "../../hooks/useMovieContext"

const Input = () => {
    const [enteredMovieName, setEnteredMovieName] = useState('')
    const { dispatch, state } = useMovieContext()
    console.log(state.query)

    const handleSubmit = async (event: React.FormEvent) => {
        let url = `/3/search/movie?query=${enteredMovieName}&include_adult=false&language=en-US&page=1`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzAxMzY0ZDg0M2Q2MGFkNDA4MjQzNWMyMGEzM2ZkYiIsIm5iZiI6MTcyMDY0MTk5OC44MjQ0MDIsInN1YiI6IjY2OGVlOTI5MTAxZGE2NGQzOTYyMWNjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AWwDFuzXmsnMLWMnaucTJuE2-aqo-70iv4PkdQh41D0'
            }
        };
        event.preventDefault()
        console.log(enteredMovieName)
        const movieResults = await axios.get(url, options)
        console.log(movieResults)
    }
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'SET_QUERY', payload: event.target.value })
    }

    return (
        <div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <label htmlFor="movieName">Movie Name</label>
                <input placeholder="Enter name of movie to search..." type="text" id="movieName" onChange={event => handleOnChange(event)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default Input