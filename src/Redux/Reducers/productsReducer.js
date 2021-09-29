import { SET_SEARCH_TEXT, SET_SELECTED_CATEGORY } from "../ActionTypes/productsActionTypes";

const initialState = {
    category : "All Products",
    search : "",
}

export function productsReducer(state=initialState,action){
    switch (action.type){
        case SET_SELECTED_CATEGORY:
            return {
                ...state,
                category : action.payload,
            };
        case SET_SEARCH_TEXT:
            return {
                ...state,
                search : action.payload,
            };
        default :
            return state;
    }
}