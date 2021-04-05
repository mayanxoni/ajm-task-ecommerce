import React from 'react';
import {Link} from 'react-router-dom'
import App from '../../App';
import Productimg from '../../images/children.jpg'

const Products = () =>{
    return (
        <App>
            <div className="container overflow-hidden">
              
                <div className="card overflow-hidden m-3  rounded-3 h-100" style={{width: "260px", maxHeight:"350px"}} >{/*key={item.pro_id}*/}
                <Link to="/product" >
                    <img src={Productimg} className="card-img-top" alt="cardImg" style={{maxHeight:"200px"}}></img>
                    </Link>
                    <div className="card-body ">
                       
                        <h4  className="card-title flex-grow-1 m-0"> 
                        <Link to="/product" style={{textDecoration:"none", color: "#7971ea" }}>product 1{/*{item.pro_name}*/}</Link>
                        </h4>
                   
                        <p className="card-text text-muted m-0 p-0"> best product{/*{item.pro_slug}*/}</p>
                        <p className="fw-bold" style={{color: "#7971ea"}}>Rs.333{/*{item.pro_price}*/}</p>
                        {/* <Button  className="btn float-right p-2" 
                        // onClick={()=>{props.bedgeincrease(); props.addProducts(item)}}
                        ><AddShoppingCartIcon fontSize="large"/></Button> */}
                
                    </div>
                </div>
                
                {/* <div class="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                <div className="block-4 text-center border">
                  <figure className="block-4-image">
                    <a href="shop-single.html"><img src={Productimg} alt="Image placeholder" class="img-fluid" /></a>
                  </figure>
                  <div className="block-4-text p-4">
                    <h3><a href="shop-single.html">Tank Top</a></h3>
                    <p className="mb-0">Finding perfect t-shirt</p>
                    <p className="text-primary font-weight-bold">$50</p>
                  </div>
                </div>
              </div> */}
            </div>
        </App>
    )
}
export default Products;