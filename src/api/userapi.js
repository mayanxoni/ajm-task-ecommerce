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

// export const signup = user => {
//     return (dispatch) => {
//     axios.POST(`${API}/user/signup`, 
//     {
//         name : user.name,
//         email : user.email,
//         password : user.password,
//         confirm_password : user.password
//     } )
       
//     //    { headers : header })
//        .then(response =>{
//         return response.json(),
//         console.log("Response",response),
//         dispatch({
//             type : 'FETCH_USER',
//             payload : user
//         })
//     }).catch(err => console.log("error",err))
//     }
// };

export const signup = user => {
    return fetch(`${API}/user/signup`,{
        method : "POST",
        headers: {
            // Accept : "application/json",
            'Content-Type': 'application/x-www-form-urlencoded'

        },
        body: new URLSearchParams({
            'name': user.name,
            'email': user.email,
            'password': user.password
          }),
    })
    .then(response => {
        console.log("response",response)        
    if (response.ok) {
            return response.json();
          } else {
             throw new Error('Something went wrong ...');
          }
        })
          .then(result => console.log("result",result))
          .catch(error => console.log("error", error ));
    // .then(response => {
    //     return response.json();
    //     console.log(response);
    // })
    // .catch(err => console.log(err))
};

export const signin = user => {
    return fetch(`${API}/user/signin`,{
        method : "POST",
        headers: {
            // Accept : "application/json",
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            
            'email': user.email,
            'password': user.password
          }),
    })
    .then(response => {
        return response.json();
    })
    
    .catch(err => console.log(err))
};


