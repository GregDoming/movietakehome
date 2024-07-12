import React, { useState, useEffect } from 'react';
import useMovieContext from "../../hooks/useMovieContext"
import useMovieApi from "../../hooks/useMovieApi"
import { SET_QUERY } from "../../reducer/actionTypes"
import "./input.css"

const Input = () => {
    const { dispatch, state } = useMovieContext()
    const { refetch } = useMovieApi(state.query)
    const [input, setInput] = useState('')

    // Effect to refetch data when query changes
    useEffect(() => {
        if (state.query) {
            refetch();
        }
    }, [state.query, refetch]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        dispatch({ type: SET_QUERY, payload: input })
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }

    return (
        <div className="input-container">
            <form  onSubmit={(event) => handleSubmit(event)}>
                <label htmlFor="movieName">Movie Search</label>
                <input autoComplete="off" placeholder="Enter name of movie to search..." type="text" id="movieName" onChange={event => handleOnChange(event)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Input;