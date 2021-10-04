import { useDispatch, useSelector } from "react-redux";
import { addToCart, setCartCount } from "../../Redux/Actions/cartActions";


function ProductCard({ product: { id, image, title, category, price, rating } }) {
    const dispatch = useDispatch();
    const cartProducts = useSelector(state => state.cart);

    return (
        <div className="2xl:w-1/4 xl:w-1/3 md:w-1/2 w-full py-2 px-4 lg:px-10 xl:py-4 xl:px-6 ">
            <div className="py-3 px-5 space-y-3 flex flex-wrap justify-center h-full rounded-2xl bg-gray-200 hover:bg-neon1-light-1000 transform transition hover:scale-102">
                <div className="relative w-full pb-110p">
                    <img className="absolute w-full h-full rounded-xl" src={image} alt="product" />
                </div>
                <div className="flex-grow">
                    <h6 className="text-base font-extrabold"><i className="fa fa-dollar pr-1"></i> {price}</h6>
                    <h6 className="lowercase text-base font-semibold"><i className="fa fa-list-alt pr-1"></i> {category}</h6>
                </div>
                <div className="text-right">
                    <h6 className="text-base font-semibold">{rating.rate} <i className="fa fa-star pl-1 text-bright-yellow"></i></h6>
                    <h6 className="text-base font-semibold">{rating.count} <i className="fa fa-user pl-1 text-blue-800"></i></h6>
                </div>
                <div className="w-full text-center">
                    {
                        cartProducts[id] ? (
                            <div className="space-x-1 sm:space-x-3 flex flex-wrap justify-around px-8 items-center">
                                <button onClick={() => dispatch(setCartCount(id, cartProducts[id].count - 1))} className="bg-red-400 transition transform hover:scale-110 px-2 py-0 sm:px-3 sm:py-1 rounded-full" ><i className="fa fa-minus font-bold text-lg sm:text-xl"></i></button>
                                <h3 className="bg-blue-100 px-3 py-0 rounded-lg font-bold text-2xl" >{cartProducts[id].count}</h3>
                                <button onClick={() => dispatch(setCartCount(id, cartProducts[id].count + 1))} className="bg-green-500 transition transform hover:scale-110 px-2 py-0 sm:px-3 sm:py-1 rounded-full" ><i className="fa fa-plus font-bold text-lg sm:text-xl"></i></button>
                            </div>
                        ) : (
                            <button onClick={() => dispatch(addToCart({ id, image, title, price, rating, count: 1 }))} className="p-2 bg-red-500 transition transform hover:scale-105 w-full rounded-lg font-semibold"><i className="fa fa-cart-plus"></i> Add To Cart</button>
                        )
                    }
                </div>
                <h4 className=" px-2 rounded-lg bg-gray-50 font-bold text-lg text-center w-full h-14 overflow-hidden whitespace-pre-wrap overflow-ellipsis">{title}</h4>
            </div>
        </div>
    )
}

export default ProductCard;