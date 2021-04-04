import React from 'react';
import {withRouter} from 'react-router-dom'
import App from '../../App';
const Footer = () => {
    return(
        <App >
            <div className="border-top">
            <div className="container">
                <p className="my-5">Copyright &copy; 2021 All rights reserved | This template is made with Love . </p>
            </div>
            </div>
        </App>
    )
}

export default withRouter(Footer);