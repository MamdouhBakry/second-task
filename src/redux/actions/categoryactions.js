import axios from "axios"
import { GET_ALL_CATEGORIES, GET_ALL_ENTRIES } from "./types";

export const getAllCategories = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get("https://api.publicapis.org/categories");
            console.log(res.data);

            dispatch({
                type: GET_ALL_CATEGORIES,
                payload: res.data
            })
        } catch (err) {
            console.log(err);
        }
    }
}
export const getEntryByID = (id) => {
    return async (dispatch) => {
        try {
            const res = await (await axios.get("https://api.publicapis.org/entries"));
            const entries = res.data.entries;
            const filteredEntries = entries.filter((entry) => entry.Category === id);
            console.log(filteredEntries)
            dispatch({
                type: GET_ALL_ENTRIES,
                payload: filteredEntries
            })
        } catch (err) {
            console.log(err);
        }
    }
}