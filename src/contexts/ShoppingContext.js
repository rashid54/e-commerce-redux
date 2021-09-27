import React, { useEffect, useState } from "react"
import { useHistory } from "react-router";
const axios = require('axios').default


export const ShopContex = React.createContext();
export const ModalContext = React.createContext();

function ShoppingContext({ children }) {
    const history = useHistory()
    const [cartChanges, setCartChanges] = useState(true);
    const [cartVisible, setCartVisible] = useState(false);

    if(!localStorage.getItem("cartProducts")){
        localStorage.setItem("cartProducts", "{}")
    }

    function setCartProducts(cartProducts){
        localStorage.setItem("cartProducts",JSON.stringify(cartProducts));
        setCartChanges(!cartChanges);
    }

    function getCategories(allProducts) {
        return allProducts.reduce((categories, product) => {
            return categories.some(category => category === product.category) ? categories : [...categories, product.category]
        }, []);
    }
    
    useEffect(setAllProducts, []); // eslint-disable-line

    function setAllProducts() {
        if ((!localStorage.getItem("allProducts"))||(!localStorage.getItem("categories"))) {
            axios.get("https://fakestoreapi.com/products")
                .then((response) => {
                    const allProducts = response.data;
                    const categories = getCategories(allProducts);

                    localStorage.setItem("allProducts", JSON.stringify(allProducts));
                    localStorage.setItem("categories", JSON.stringify(categories)); 
                    setCartChanges(!cartChanges);
                })
                .catch(error=>{
                    history.push("/error/");
                })
        }
    }

    return (
        <ShopContex.Provider value={[setCartProducts]}>
            <ModalContext.Provider value={{ cartVisible, setCartVisible }} >
                {children}
            </ModalContext.Provider>
        </ShopContex.Provider>
    )
}

export default ShoppingContext;