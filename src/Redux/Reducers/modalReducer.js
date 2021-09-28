import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from "../ActionTypes/modalActionsTypes";


export default function modalReducer(state={}, action){
    switch (action.type){
        case OPEN_SIDEBAR:
            return {
                ...state,
                sidebarOpen: true,
            }

        case CLOSE_SIDEBAR:
            return {
                ...state,
                sidebarOpen: false,
            }
        default :
            return state;
    }
}