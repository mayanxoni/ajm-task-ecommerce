import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import ProductDetail from './components/Products/ProductDetail';
import Products from './components/Products/Products';
import Signin from './components/User/Signin'
import SignUp from './components/User/SignUp';
import Wishlist from './components/WishProduct/Wishlist';

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/shop" exact component={Products} />
                <Route path="/product" exact component={ProductDetail} />
                <Route path="/wishproduct" exact component={Wishlist} />
            </Switch>
        </Router>
    )
}

export default Routes;