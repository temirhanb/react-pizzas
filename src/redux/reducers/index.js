import pizzas from "./pizzas";
import filters from "./filters";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    filters,
    pizzas,
})

export default rootReducer