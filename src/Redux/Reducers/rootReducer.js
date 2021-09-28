import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import modalReducer from "./modalReducer";


const rootReducer = combineReducers({
    cart: cartReducer,
    modals: modalReducer,
})

export default rootReducer;