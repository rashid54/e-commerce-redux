import { ADD_TO_CART, REMOVE_ALL_FROM_CART, REMOVE_FROM_CART, SET_CART_COUNT } from "../ActionTypes/cartActionTypes";


export default function cartReducer(state={}, action){
    switch (action.type){
        case ADD_TO_CART:
            return {
                ...state,
                [action.payload.id]: action.payload,
            }
        case REMOVE_FROM_CART:
            const {[action.payload.id]: removedProduct, ...newCart} = state;
            return newCart;
        case SET_CART_COUNT:
            return {
                ...state,
                [action.payload.id] : {
                    ...state[action.payload.id],
                    count: action.payload.count ,
                }
            }
        case REMOVE_ALL_FROM_CART:
            return {};
        default:
            return state;
    }
}