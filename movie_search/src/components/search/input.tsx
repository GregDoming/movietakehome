import useMovieContext from "../../hooks/useMovieContext"
import useMovieApi from "../../hooks/useMovieApi"
import "./input.css"

const Input = () => {
    const { dispatch, state } = useMovieContext()
    const { isLoading, refetch } = useMovieApi(state.query)

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        refetch()
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'SET_QUERY', payload: event.target.value })
    }

    if (isLoading) return <h3>Loading...</h3>

    return (
        <div className="input-container">
            <form onSubmit={(event) => handleSubmit(event)}>
                <label htmlFor="movieName">Movie Search</label>
                <input placeholder="Enter name of movie to search..." type="text" id="movieName" onChange={event => handleOnChange(event)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Input