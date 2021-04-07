import {API} from '../backend';


//get all products
export const getProducts= () => {
    return fetch(`${API}/products`)
    .then((response)=>{
        return response.json() 
    })
    .catch((err)=>console.log(err));
};

//get one product detail
export const  getProductDetail = (id) =>{
    return fetch(`${API}/products/?id=${id}`)
    .then((response)=>{
        return response.json()
    })
    .catch((err)=> console.log(err))
}

//get wishlist
export const getWishProducts = (id) => {
    return fetch(`${API}/wishlist/?id=${id}`)
    .then((response)=>{
        return response.json()
    })
    .catch((err)=>console.log(err))
}