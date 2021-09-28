import { ADD_TO_CART, REMOVE_ALL_FROM_CART, REMOVE_FROM_CART, SET_CART_COUNT } from "../ActionTypes/cartActionTypes";


export function addToCart(product){
    return {
        type : ADD_TO_CART,
        payload : product,
    };
}

export function removeFromCart(id){
    return {
        type : REMOVE_FROM_CART,
        payload : {
            id,
        }
    };
}

export function setCartCount(id, count){
    return count>0? {
        type : SET_CART_COUNT,
        payload : {
            id,
            count,
        }
    }: removeFromCart(id);
}

export function removeAllFromCart(){
    return {
        type : REMOVE_ALL_FROM_CART,
    }
}