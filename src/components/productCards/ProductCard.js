import { useContext } from "react";
import { ShopContex } from "../../contexts/ShoppingContext";


function ProductCard({ product: { id, image, title, category, price, rating} }) {
    const cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    const [setCartProducts] = useContext(ShopContex);

    return (
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
                        <div className="space-x-3 flex flex-wrap justify-around px-8 items-center">
                            <button onClick={() => {(cartProducts[id].count===1)?delete cartProducts[id]:cartProducts[id].count-- ; setCartProducts(cartProducts)}} className="bg-red-400 transition transform hover:scale-110 px-3 py-1 rounded-full" ><i className="fa fa-minus font-bold text-xl"></i></button>
                            <h3 className="bg-blue-100 px-3 py-0 rounded-lg font-bold text-2xl" >{cartProducts[id].count}</h3>
                            <button onClick={() => setCartProducts({...cartProducts, [id]: {...cartProducts[id],count: (cartProducts[id].count+1)}})} className="bg-green-500 transition transform hover:scale-110 px-3 py-1 rounded-full" ><i className="fa fa-plus font-bold text-xl"></i></button>
                        </div>
                    ) : (
                        <button onClick={() => setCartProducts({...cartProducts, [id]: {id,image,title,price,rating,count:1}})} className="p-2 bg-red-500 transition transform hover:scale-105 w-full rounded-lg font-semibold"><i className="fa fa-cart-plus"></i> Add To Cart</button>
                    )
                }
            </div>
            <h4 className=" px-2 rounded-lg bg-gray-50 font-bold text-lg text-center w-full h-14 overflow-hidden whitespace-pre-wrap overflow-ellipsis">{title}</h4>
        </div>
    )
}

export default ProductCard;