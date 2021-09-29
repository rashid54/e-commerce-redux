import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeAllFromCart } from "../../Redux/Actions/cartActions";


function CheckoutPage() {
    const dispatch = useDispatch();
    const cartProducts = useSelector(state=> state.cart);
    const history = useHistory();

    function handleSubmit() {
        dispatch(removeAllFromCart());
        history.push('/success/')
    }
    return (
        <div className="pt-24 bg-gradient-to-br from-neon1-light-1000 to-neon1-light-500 w-full h-screen">
            {
                Object.keys(cartProducts).length ? (
                    <div className="w-5/6 md:w-1/2 mx-auto bg-neon1-light-600 rounded-md my-20 p-8">
                        <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
                            <input className="focus:bg-white hover:scale-102 transition transform p-2 text-gray-900 placeholder-gray-500 rounded-md bg-gray-200 border border-gray-200 focus:border-gray-500 outline-none focus:outline-none" type="text" name="fname" placeholder="First Name" />
                            <input className="focus:bg-white hover:scale-102 transition transform p-2 text-gray-900 placeholder-gray-500 rounded-md bg-gray-200 border border-gray-200 focus:border-gray-500 outline-none focus:outline-none" type="text" name="lname" placeholder="Last Name" />
                            <input className="focus:bg-white hover:scale-102 transition transform p-2 text-gray-900 placeholder-gray-500 rounded-md bg-gray-200 border border-gray-200 focus:border-gray-500 outline-none focus:outline-none" type="email" name="email" placeholder="Email" />
                            <textarea className="focus:bg-white resize-none hover:scale-102 transition transform p-2 text-gray-900 placeholder-gray-500 rounded-md bg-gray-200 border border-gray-200 focus:border-gray-500 outline-none focus:outline-none" name="address" placeholder="Address" />
                            <div className="flex px-4 rounded-md mx-2">
                                <h4 className="font-semibold text-base sm:text-lg">Total Items: </h4>
                                <h6 className="flex-grow text-right w-1/2 text-base sm:text-lg font-bold">{Object.values(cartProducts).reduce((totalSelected, product) => totalSelected + product.count, 0)}</h6>
                            </div>
                            <div className="flex px-4 rounded-md mx-2">
                                <h4 className="font-semibold text-base sm:text-lg">Total Cost: </h4>
                                <h6 className="flex-grow text-right w-1/2 text-base sm:text-lg font-bold"><i className="fa fa-dollar text-base pl-2"></i> {Object.values(cartProducts).reduce((totalCost, product) => totalCost + (product.count * product.price), 0).toFixed(2)}</h6>
                            </div>
                            <button className="bg-green-500 p-3 rounded-lg transform transition hover:bg-green-600 hover:scale-105 font-semibold text-lg" type="submit" >Checkout</button>
                            <button className="bg-red-300 p-3 rounded-lg transform transition hover:bg-red-200 hover:scale-105 font-semibold text-lg" onClick={() => history.push('/')}>Cancel</button>
                        </form>
                    </div>
                ) : (
                    <div className="flex flex-col w-5/6 md:w-1/2 mx-auto space-y-4 bg-neon1-light-600 rounded-md my-20 p-8">
                        <h4 className="text-blue-500 font-bold text-2xl text-center">No Product in Cart</h4>
                        <p className="font-medium text-lg font-serif">No product is added to cart. Please add the products you want to but to cart and visit this page again.</p>
                        <button onClick={() => history.push('/',true)} className="bg-blue-500 text-blue-200 p-2 rounded-lg font-semibold text-xl">View Products</button>
                    </div>
                )
            }
        </div>
    )
}

export default CheckoutPage;