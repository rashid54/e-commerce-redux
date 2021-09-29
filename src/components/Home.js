import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CheckoutPage from "./pages/CheckoutPage";
import NotFoundPage from "./pages/NotFoundPage";
import Products from "./pages/Products";
import PurchaseSuccess from "./pages/PurchaseSuccess";
import PageTemplate from "./PageTemplate";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import ErrorPage from "./pages/ErrorPage";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store, { persistor } from "../Redux/Store/store";


function Home() {
    return (
        <Provider store={store} >
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <PageTemplate>
                        <Switch>
                            <Route exact path="/" >
                                <Products />
                            </Route>
                            <Route exact path="/checkout/" >
                                <CheckoutPage />
                            </Route>
                            <Route path="/success/" >
                                <PurchaseSuccess />
                            </Route>
                            <Route path="/about/" >
                                <AboutUs />
                            </Route>
                            <Route path="/contacts/" >
                                <Contacts />
                            </Route>
                            <Route path="/error/" >
                                <ErrorPage />
                            </Route>
                            <Route path="*" >
                                <NotFoundPage />
                            </Route>
                        </Switch>
                    </PageTemplate>
                </Router>
            </PersistGate>
        </Provider>
    )
}

export default Home;
