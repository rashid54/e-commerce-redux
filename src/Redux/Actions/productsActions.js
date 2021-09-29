import axios from "axios";
import { SET_SEARCH_TEXT, SET_SELECTED_CATEGORY } from "../ActionTypes/productsActionTypes";


export async function fetchProducts(dispatch){
    if ((!localStorage.getItem("allProducts"))||(!localStorage.getItem("categories"))) {
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                const allProducts = response.data;
                const categories = allProducts.reduce((categories, product) => {
                    return categories.some(category => category === product.category) ? categories : [...categories, product.category]
                }, []);

                localStorage.setItem("allProducts", JSON.stringify(allProducts));
                localStorage.setItem("categories", JSON.stringify(categories)); 
                dispatch(setSelectedCategory(""));
                dispatch(setSelectedCategory("All Products"));
            })
            .catch(error=>{
                // history.push("/error/");
            })
    }
}

export function setSelectedCategory(category){
    return {
        type : SET_SELECTED_CATEGORY,
        payload : category,
    }
}

export function setSearchText(text){
    return {
        type : SET_SEARCH_TEXT,
        payload : text,
    }
}
