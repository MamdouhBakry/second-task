import { combineReducers } from "redux";
import categoriesReducer from "./categoryReducer";
export default combineReducers({
    categories: categoriesReducer
})