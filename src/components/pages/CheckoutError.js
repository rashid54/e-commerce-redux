import { useHistory } from "react-router";


function CheckoutError(){
    const history = useHistory();
    return (
        <div className="flex flex-col w-5/6 md:w-1/2 mx-auto space-y-4 bg-neon1-light-600 rounded-md my-20 p-8">
            <h4 className="text-blue-500 font-bold text-2xl text-center">No Product in Cart</h4>
            <p className="font-medium text-lg font-serif">No product is added to cart. Please add the products you want to but to cart and visit this page again.</p>
            <button onClick={() => history.push('/')} className="bg-blue-500 text-blue-200 p-2 rounded-lg font-semibold text-xl">View Products</button>
        </div>
    );
}

export default CheckoutError;