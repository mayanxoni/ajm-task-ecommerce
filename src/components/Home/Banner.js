import React from 'react';
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className="  banner-top " >
            <div className="container" style={{height:"700px"}}>
                <div className="d-flex justify-content-end   ">
                    <div className="row  mt-5  justify-content-end  " >
                        <div className="col-md-5  pt-md-0  text-start" >
                            <h1 className="fw-bold mb-2 " >Finding Your Perfect shoes</h1>
                            <div className="intro-text  text-md-left" >
                                <p className="mb-4 fs-5 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                                <Link to="/shop" className="btn btn-md text-white" style={{backgroundColor:"#7971ea" }}>SHOP NOW</Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;