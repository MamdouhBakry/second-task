import { GET_ALL_CATEGORIES, GET_ALL_ENTRIES } from "../actions/types";
const initialstate = {
    categories: [],
    selectedEntries: []
}
const categoriesReducer = (state = initialstate, action) => {
    switch (action.type) {
        case GET_ALL_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case GET_ALL_ENTRIES:
            return {
                ...state,
                selectedEntries: action.payload
            }
        default:
            return state;
    }
}
export default categoriesReducer;