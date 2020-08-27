import React from "react"
import axios from "axios"

export const setLoading = (value) => ({
    type: 'SET_LOADING',
    payload: value
})

export const fetchPizzas = (sortBy, category) => (dispatch) => {

    dispatch(setLoading(false))
    axios.get(`http://localhost:3001/pizzas?${
        category !== null ? `category=${category}` : ''
    }&_sort=${sortBy.type}&_order=${sortBy.order}`)
        .then(({data}) => {
            dispatch(setPizzas(data))
        })
}

export const setPizzas = (payload) => ({
    type: 'SET_PIZZAS',
    payload
})