import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShoppingContext from "../contexts/ShoppingContext";
import CheckoutPage from "./pages/CheckoutPage";
import NotFoundPage from "./pages/NotFoundPage";
import Products from "./pages/Products";
import PurchaseSuccess from "./pages/PurchaseSuccess";
import PageTemplate from "./PageTemplate";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import ErrorPage from "./pages/ErrorPage";


function Home() {
    return (
        <ShoppingContext>
            <Router>
                <Switch>
                    <Route exact path="/" >
                        <PageTemplate>
                            <Products />
                        </PageTemplate>
                    </Route>
                    <Route exact path="/checkout/" >
                        <PageTemplate>
                            <CheckoutPage />
                        </PageTemplate>
                    </Route>
                    <Route path="/success/" >
                        <PageTemplate>
                            <PurchaseSuccess />
                        </PageTemplate>
                    </Route>
                    <Route path="/about/" >
                        <PageTemplate>
                            <AboutUs />
                        </PageTemplate>
                    </Route>
                    <Route path="/contacts/" >
                        <PageTemplate>
                            <Contacts />
                        </PageTemplate>
                    </Route>
                    <Route path="/error/" >
                        <PageTemplate>
                            <ErrorPage />
                        </PageTemplate>
                    </Route>
                    <Route path="*" >
                        <PageTemplate>    
                            <NotFoundPage />
                        </PageTemplate>
                    </Route>
                </Switch>
            </Router>
        </ShoppingContext>
    )
}

export default Home;
