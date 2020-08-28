import {SET_LOADED, SET_PIZZAS} from "../types";

const initState = {
    items: [],
    isLoaded: false
}

const pizzas = (state = initState, action) => {

    switch (action.type) {
        case SET_PIZZAS:
            return {
                // предыдущее свойство
                ...state,
                // заменить на новое
                items: action.payload,
                isLoaded: true
            }
        case SET_LOADED: {
            return {
                ...state,
                isLoaded: action.payload
            }
        }
        default:
            return state
    }
}

export default pizzas