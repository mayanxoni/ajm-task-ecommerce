import React from 'react';
import Women from '../../images/women.jpg'
import Children from '../../images/children.jpg'
import Men from '../../images/men.jpg'

const Category = () => {
    return(
        <div className="border-bottom">
            <div class="container px-5">
                <div class="row my-5 mx-2">
                    <div class="col-sm-4 my-4" style={{minWidth:"00px"}}>
                        <img className="img-fluid" src={Women} alt="women products"/>
                    </div>
                    <div class="col-sm-4 my-4" style={{minWidth:"00px"}}>
                        <img className="img-fluid" src={Children} alt="children products"/>
                    </div>
                    <div class="col-sm-4 my-4" style={{minWidth:"00px"}}>
                        <img className="img-fluid" src={Men} alt="men products"/>
                    </div>
                </div>
            </div>
        </div>
                        
    )
}

export default Category;