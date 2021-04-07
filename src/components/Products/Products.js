import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import App from '../../App';
import '../../App.css'

import {getProducts} from '../../api/productapi'

const Products = () =>{

  const [products , setProducts] = useState([]);

    const getProduct = () => {
      getProducts().then(data=>{
        console.log("data",data);
        setProducts(data)
        console.log("products",products);
      }).catch((err)=>console.log("err",err))
    }
    useEffect(()=>{
      getProduct()
    },[]);

    return (
        <App>
            <div className="container overflow-hidden ">
              <div className=" overflow-hidden px-4 ">
                <div className="row  mb-5">
                  {products.map((item)=>
                  <div className="col-lg-3 mt-5">
                    <div className="card overflow-hidden  rounded-3 cardresponsive"  key={item.pro_id}>
                    <Link to={`/product/${item.id}`}  aboutProps={item.id}>
                        <img src={item.image} className="card-img-top " alt="cardImg" style={{width:"100%"}}></img>
                        </Link>
                        <div className="card-body ">
                          
                            <h4  className="card-title flex-grow-1 m-0"> 
                            <Link to={`/product/${item.pro_id}`} style={{textDecoration:"none", color: "#7971ea" }}>{item.name}</Link>
                            </h4>
                            <div className="overflow-hidden " style={{height:"100px"}}>
                            <p className="card-text text-muted my-2 p-0"> {item.description}</p>
                            </div>
                            <p className="fw-bold mt-2" style={{color: "#7971ea"}}>Rs.{item.price}</p>
                      
                        </div>
                    </div>
                    
                    </div>
                    )}
                    </div>
                  </div>  
             
            </div>
        </App>
    )
}
export default Products;