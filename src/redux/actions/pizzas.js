import React from "react"
import axios from "axios"
import {SET_LOADING, SET_PIZZAS} from "../types"

export const setLoading = (value) => ({
    type: SET_LOADING,
    payload: value
})

export const setPizzas = (payload) => ({
    type: SET_PIZZAS,
    payload
})

export const fetchPizzas = (sortBy, category) => (dispatch) => {

    dispatch(setLoading(false))

    axios.get(`/pizzas?${
        category !== null ? `category=${category}` : ''
    }&_sort=${sortBy.type}&_order=${sortBy.order}`)
        .then(({data}) => {
            dispatch(setPizzas(data))
        })
}