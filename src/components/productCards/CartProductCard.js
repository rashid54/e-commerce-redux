import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, setCartCount } from "../../Redux/Actions/cartActions";


function CartProductCard({ id }) {
    const dispatch = useDispatch();
    const { title, image, price, rating: { rate }, count } = useSelector(state => state.cart[id]);

    return (
        <div className="bg-gray-300 hover:bg-neon1-light-1000 transform transition hover:scale-102 mx-2 my-3 px-3 py-1 flex flex-wrap flex-row rounded-md">
            <div className="w-full flex flex-wrap space-y-1 space-x-2">
                <div className="relative w-1/4 pb-1/4">
                    <img className="absolute w-full h-full rounded-xl" src={image} alt="product" />
                </div>
                <div className="w-3/5 flex flex-wrap flex-grow space-y-1">
                    <h4 className="w-full bg-gray-100 text-center rounded h-14 overflow-hidden overflow-ellipsis font-bold text-lg">{title}</h4>
                    <h6 className="w-1/2 text-base font-bold"><i className="fa fa-dollar pr-1"></i> {price}</h6>
                    <h6 className="w-1/2 text-right text-base font-semibold">{rate} <i className="fa fa-star pl-1 text-yellow-300"></i></h6>
                </div>
            </div>
            <div className="flex w-full py-1">
                <button className="bg-red-400 transition transform hover:scale-105 w-1/4 py-0 px-2 font-semibold rounded-md" onClick={() => dispatch(removeFromCart(id))} >Remove</button>
                <div className="flex space-x-3 justify-around flex-grow px-8 space-x-4">
                    <h3 className="flex-grow bg-gray-100 px-3 py-0 text-center rounded font-bold text-lg" >{count}</h3>
                    <button onClick={() => dispatch(setCartCount(id, count - 1))} className="bg-red-400 transition transform hover:scale-110 px-2 py-0 rounded-full" ><i className="fa fa-minus font-bold text-xl"></i></button>
                    <button onClick={() => dispatch(setCartCount(id, count + 1))} className="bg-green-500 transition transform hover:scale-110 px-2 py-0 rounded-full" ><i className="fa fa-plus font-bold text-xl"></i></button>

                </div>
            </div>

        </div>
    )
}

export default CartProductCard;