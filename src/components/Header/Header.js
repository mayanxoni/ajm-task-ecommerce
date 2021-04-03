import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../App.css'

import { faSearch, faUser, faHeart } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return(
        <div className="mt-4 border-bottom" >
            <div className="container mb-4 px-5 ">

                <div className=" my-auto pt-3 d-flex flex-row justify-content-between">
                    <form className="form-inline  mx-3">
                        <div className="form-group d-flex flex-row">
                        <div className=" my-auto">
                            <span className="mx-2 " ><FontAwesomeIcon className="" icon={faSearch} size="sm" color="gray"/></span>
                        </div>
                        <input type="text" className="overflow-hidden border-0 w-50" placeholder="Search" style={{ outline: "none"}} />
                        </div>
                    </form>
                   
                    <div className="" style={{marginLeft:"-100px"}}>
                        <p className="border fs-5 border-dark p-2 px-3 my-auto font-monospace" style={{fontWeight: "bold", color:"#404040", letterSpacing:"4px"}}>WHOLEMART</p>
                    </div>
                    <div className="my-auto d-flex flex-row" style={{marginRight:"1rem" }}>
                       <p className="btn header-icon "><FontAwesomeIcon icon={faUser}  style={{ outline: "none"}}/></p> 
                       <p className="btn  header-icon "><FontAwesomeIcon icon={faHeart} style={{ outline: "none"}}/></p> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;