import { API } from "../backend";
import axios from 'axios';
const header = {
    'Content-Type': 'application/x-www-form-urlencoded'
    //'Authorization': 'JWT fefege...'
  };
//   var postData = (user) => {
//     name : user.name,
//     email : user.email,
//     password : user.password,
//     confirm_password : user.password
//   };

export const signup = user => {
    return (dispatch) => {
    axios.POST(`${API}/user/signup`, 
    {
        name : user.name,
        email : user.email,
        password : user.password,
        confirm_password : user.password
    } )
       
    //    { headers : header })
       .then(response =>{
        return response.json(),
        console.log("Response",response),
        dispatch({
            type : 'FETCH_USER',
            payload : user
        })
    }).catch(err => console.log("error",err))
    }
};