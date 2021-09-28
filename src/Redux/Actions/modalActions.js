import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from "../ActionTypes/modalActionsTypes";


export function openSidebar(){
    return {
        type: OPEN_SIDEBAR,
    }
}

export function closeSidebar(){
    return {
        type: CLOSE_SIDEBAR,
    }
}