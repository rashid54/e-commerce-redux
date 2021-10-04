import { useDispatch } from "react-redux";
import { fetchProducts } from "../Redux/Actions/productsActions";
import Footer from "./footer/Footer";
import CartSidebar from "./modals/CartSidebar";
import Navbar from "./navbar/Navbar";



function PageTemplate({children}){
    const dispatch = useDispatch();
    dispatch(fetchProducts);
    
    return (
        <div className="">
            <Navbar />
            {children}
            <Footer />
            <CartSidebar />
        </div>
    )
}

export default PageTemplate;