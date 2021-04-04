import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Signin from './components/User/Signin'
import SignUp from './components/User/SignUp';

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={SignUp} />
            </Switch>
        </Router>
    )
}

export default Routes;