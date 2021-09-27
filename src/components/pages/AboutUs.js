import { useHistory } from "react-router-dom";



function AboutUs() {
    const history = useHistory();
    return (
        <div className="pt-24 bg-gradient-to-br from-neon1-light-1000 to-neon1-light-500 w-full h-screen">
            <div className="flex flex-col w-5/6 md:w-1/2 mx-auto space-y-4 bg-neon1-light-600 rounded-md my-20 p-8">
                <h4 className="text-blue-500 font-bold text-3xl text-center">E-Shop</h4>
                <p className="font-medium text-lg font-serif text-center">An E-commerce platform for the ordering products online. View huge amount of our products from the Products page. </p>
                <button onClick={() => history.push('/')} className="bg-blue-500 text-blue-200 p-2 rounded-lg font-semibold text-xl">View Products</button>
            </div>
        </div>
    )
}

export default AboutUs;