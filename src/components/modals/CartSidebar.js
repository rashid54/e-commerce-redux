import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeAllFromCart } from "../../Redux/Actions/cartActions";
import { closeSidebar } from "../../Redux/Actions/modalActions";
import CartProductCard from "../productCards/CartProductCard";


function CartSidebar() {
    const dispatch = useDispatch();
    const cartProducts = useSelector(state => state.cart);
    const cartVisible = useSelector((state) => state.modals.sidebarOpen);
    const history = useHistory();

    return (
        <React.Fragment>
            <div onClick={() => dispatch(closeSidebar())} className={`fixed inset-0 bg-neon1-light-500 h-full w-full z-20 overflow-y-auto transform ease-linear duration-200 transition-opacity ${cartVisible ? "bg-opacity-50 translate-x-0" : "bg-opacity-0 translate-x-full"}`}></div>
            <div className={`transition-all transform ease-in-out duration-300 flex flex-col h-full bg-gray-100 fixed right-0 top-0 z-20 w-11/12 sm:w-7/12 md:w-6/12 lg:w-2/5 xl:w-1/3 2xl:w-1/4 ${cartVisible ? "translate-x-0" : "translate-x-full"}`}>
                <div className="bg-gradient-to-tr from-night-light-100 to-neon1-light-300 px-2 py-4 items-center flex">
                    <h6 className="text-night-dark-200 font-bold text-xl sm:text-2xl lg:text-3xl flex-grow px-2 py-1 mx-2 rounded-md">Shopping Cart</h6>
                    <div className="transition transform hover:scale-105 hover:bg-opacity-75 cursor-pointer bg-night-dark-400 px-3 py-1 mx-2 rounded-xl text-night-light-100 text-2xl" onClick={() => dispatch(closeSidebar())}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg></div>
                </div>
                <div className="overflow-y-auto flex-grow">
                    {
                        Object.values(cartProducts).map((product) => <CartProductCard key={product.id} id={product.id} />)
                    }
                </div>
                <div className="flex flex-col space-y-1 py-2">
                    <button disabled={!Object.keys(cartProducts).length} className={`transition transform hover:scale-102 font-semibold text-lg sm:text-lg bg-neon1-light-100 mx-2 rounded-lg py-3 ${Object.keys(cartProducts).length ? "hover:bg-opacity-80" : "cursor-not-allowed bg-opacity-30 hover:bg-opacity-20"}`} onClick={() => { dispatch(closeSidebar()); history.push('/checkout/') }}>Proceed To Checkout</button>
                    <div className="flex py-1 px-4 rounded-md mx-2">
                        <h4 className="font-semibold text-base sm:text-lg">Total Cost: </h4>
                        <h6 className="flex-grow text-right w-1/2 text-base sm:text-lg font-bold"><i className="fa fa-dollar text-base pl-2"></i> {Object.values(cartProducts).reduce((totalCost, product) => totalCost + (product.count * product.price), 0).toFixed(2)}</h6>
                    </div>
                    <button className="transition transform hover:scale-102 hover:bg-opacity-90 font-medium text-base sm:text-lg bg-red-500 mx-2 rounded-lg py-1" onClick={e => dispatch(removeAllFromCart())}>Remove All</button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CartSidebar;