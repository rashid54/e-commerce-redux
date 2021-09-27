import Footer from "./footer/Footer";
import CartSidebar from "./modals/CartSidebar";
import Navbar from "./navbar/Navbar";



function PageTemplate({children}){
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