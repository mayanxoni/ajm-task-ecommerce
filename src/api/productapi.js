import { API } from '../backend';
let user = JSON.parse(localStorage.getItem('jwt'));

//get all products
export const getProducts = () => {
	return fetch(`${API}/products`)
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

//get one product detail
export const getProductDetail = (id) => {
	return fetch(`${API}/products/?id=${id}`)
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

//get wishlist
export const getWishProducts = (userdata) => {
	return fetch(`${API}/wishlist/?id=${userdata.user.id}`, {
		headers: {
			'auth-token': `${userdata.token} `,
		},
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

//Update Wishlist
export const addToWishlist = (id, productId) => {
	return fetch(`${API}/wishlist/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'auth-token': `${user.token} `,
		},
		body: new URLSearchParams({
			productId: productId,
			ordered: 'true',
		}),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};
