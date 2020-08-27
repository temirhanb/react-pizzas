import pizzas from "./pizzas";
import filters from "./filters";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    pizzas: pizzas,
    filters: filters
})

export default rootReducer