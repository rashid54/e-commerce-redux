import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import modalReducer from "./modalReducer";
import { productsReducer } from "./productsReducer";


const rootReducer = combineReducers({
    cart: cartReducer,
    modals: modalReducer,
    products: productsReducer,
})

export default rootReducer;