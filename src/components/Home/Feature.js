import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../App.css'

import { faTruck, faUndoAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

const Feature = () => {
    return(
        <div className="border-bottom ">
            <div className="container-sm ">
                <div className="row overflow-hidden my-5 p-3 mx-5">
                    <div className="col-md-4 d-lg-flex  mt-3" >
                        <div className="align-self-start  " style={{marginRight:"1.5rem"}}>
                            <span><FontAwesomeIcon className="fa-flip-horizontal fs-1" icon={faTruck} color="#7971ea" aria-hidden="true" /></span>
                        </div>
                        <div className="text-start">
                            <h4 className="" style={{fontSize:"18px",  letterSpacing:"1px"}}>FREE SHIPPING</h4>
                            <p className="text-muted" style={{fontSize:"16px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-lg-flex  mt-3">
                        <div className="align-self-start " style={{marginRight:"1.5rem"}}>
                                <span><FontAwesomeIcon className="fa-flip-horizontal fs-1 " icon={faUndoAlt}  color="#7971ea" aria-hidden="true" /></span>
                        </div>
                        <div className="text-start ">
                                <h4 className="font-monospace" style={{fontSize:"18px", letterSpacing:"1px"}}>FREE RETURNS</h4>
                                <p className="text-muted" style={{fontSize:"16px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-lg-flex  mt-3 ">
                        <div className="align-self-start " style={{marginRight:"1.5rem"}}>
                                <span><FontAwesomeIcon className="fs-1" icon={faQuestionCircle} color="#7971ea" aria-hidden="true" /></span>
                        </div>
                        <div className="text-start">
                                <h4 className="font-monospace" style={{fontSize:"18px",letterSpacing:"1px"}}>CUSTOMER SUPPORT</h4>
                                <p className="text-muted" style={{fontSize:"16px"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                        </div>
                    </div>

                </div> 
            </div>
        </div>
        
    )
}

export default Feature;