import {ADD_PIZZA_CART} from "../types";

export const addPizzaToCart = pizzasObj => ({
    type: ADD_PIZZA_CART,
    payload: pizzasObj
})