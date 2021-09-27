import { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { ModalContext, ShopContex } from '../../contexts/ShoppingContext';


function Navbar() {
    const cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    const [ _setCartProducts] = useContext(ShopContex); //eslint-disable-line
    const { setCartVisible } = useContext(ModalContext);
    const [isHamMenuOpen, setIsHamMenuOpen] = useState(false);
    const history = useHistory();

    const siteLogo = "https://freevector-images.s3.amazonaws.com/uploads/vector/preview/36682/36682.png";
    return (
        <div className={`px-6 sm:px-12 lg:px-14 xl:px-20 py-5 overflow-y-hidden flex items-start md:items-center bg-gradient-to-tr from-night-light-100 to-neon1-light-300 fixed top-0 w-full z-10 md:h-24 transform ease-linear duration-300 transition-all ${isHamMenuOpen ? "max-h-60" : "max-h-20"}`}>
            <div className="flex flex-wrap items-center flex-grow">
                <div className="md:hidden mr-5 transition transform hover:scale-105 hover:bg-opacity-80 text-night-light-100 bg-night-dark-100 p-2 rounded-lg" onClick={() => setIsHamMenuOpen(!isHamMenuOpen)}>
                    {
                        isHamMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )
                    }
                </div>
                <img onClick={() => history.push('/')} className="cursor-pointer transition transform hover:scale-105 hover:bg-opacity-80 border-2 border-night-light-400 mr-2 hidden sm:inline-block w-11 h-11 md:w-16 md:h-16 rounded-lg md:rounded-2xl" src={siteLogo} alt="Site Logo" />
                <h2 onClick={() => history.push('/')} className="cursor-pointer text-night-dark-400 font-bold text-3xl font-serif transition transform hover:scale-105 hover:bg-opacity-80 mr-8">E-Shop</h2>
                <div className="md:space-x-5 mt-4  flex flex-col md:flex-row w-full md:w-auto md:inline-block">
                    <div className="text-lg inline-block font-semibold my-1 text-night-light-100 bg-night-dark-100 px-2 rounded-md transition transform hover:scale-110 hover:bg-opacity-80"><Link to="/">Products</Link></div>
                    <div className="text-lg inline-block font-semibold my-1 text-night-light-100 bg-night-dark-100 px-2 rounded-md transition transform hover:scale-110 hover:bg-opacity-80"><Link to="/about/">About</Link></div>
                    <div className="text-lg inline-block font-semibold my-1 text-night-light-100 bg-night-dark-100 px-2 rounded-md transition transform hover:scale-110 hover:bg-opacity-80"><Link to="/contacts/">Contacts</Link></div>
                </div>
            </div>
            <button onClick={() => setCartVisible(true)} className="transition transform hover:scale-110 hover:bg-opacity-80 text-3xl mx-2 my-1 bg-night-dark-100 text-night-light-100 px-2 relative rounded-lg justify-self-end" >
                <i className="fa fa-shopping-cart"></i>
                {
                    Object.keys(cartProducts).length ? (
                        <p className="absolute -right-3 -top-3 text-base rounded-full px-2 bg-indigo-500 text-neon1-light-300 font-semibold">{Object.values(cartProducts).reduce((totalSelected, product) => totalSelected + product.count, 0)}</p>
                    ) : ""
                }
            </button>
        </div>
    )
}

export default Navbar;