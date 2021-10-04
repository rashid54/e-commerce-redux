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
                            <Route exact path="/" component={Products} />
                            <Route exact path="/checkout/" component={CheckoutPage} />
                            <Route exact path="/success/" component={PurchaseSuccess} />
                            <Route exact path="/about/" component={AboutUs} />
                            <Route exact path="/contacts/" component={Contacts} />
                            <Route exact path="/error/" component={ErrorPage} />
                            <Route path="*" component={NotFoundPage} />
                        </Switch>
                    </PageTemplate>
                </Router>
            </PersistGate>
        </Provider>
    )
}

export default Home;
