import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';
import { getProducts } from '../../api/productapi';
const responsive = {
	0: { items: 1 },
	568: { items: 2 },
	1024: { items: 3 },
};

const items = [
	// products.map((item)=>
	//   <div className="item img-fliud text-center bg-white mx-2 mt-5" data-value="1" >
	//   <img  src={item.image} style={{maxHeight:"400px"}}/>
	//   <div className="  mx-auto" >
	//     <h4 style={{color:"#7971ea"}}>hlo</h4>
	//     <p>features</p>
	//   </div>
	// </div>)
	// <div className="item img-fliud text-center bg-white mx-2 mt-5" data-value="2">
	//   <img src={Children} style={{maxHeight:"400px"}}/>
	//   <div>
	//     <h4 style={{color:"#7971ea"}}>hii</h4>
	//     <p>features</p>
	//   </div>
	// </div>,
	// <div className="item img-fliud text-center bg-white mx-2 mt-5" data-value="3">
	//   <img src={Children} style={{maxHeight:"400px"}}/>
	//   <div>
	//     <h4 style={{color:"#7971ea"}}>hello</h4>
	//     <p>features</p>
	//   </div>
	// </div>,
	// <div className="item img-fliud text-center bg-white mx-2 mt-5" data-value="4">
	//   <img src={Children} style={{maxHeight:"400px"}}/>
	//   <div>
	//     <h4 style={{color:"#7971ea"}}>hey</h4>
	//     <p>features</p>
	//   </div>
	//   </div>,
	// <div className="item  img-fluid text-center bg-white mx-2 mt-5" data-value="5">
	//   <img src={Children} style={{maxHeight:"400px"}}/>
	//   <div>
	//     <h4 style={{color:"#7971ea"}}>haha</h4>
	//     <p>features</p>
	//   </div>
	// </div>,
];

const SectionProducts = () => {
	const [products, setProducts] = useState([]);

	const getProduct = () => {
		getProducts()
			.then((data) => {
				var featuredProducts = data.filter(
					(item) => item.featured !== false
				);
				setProducts(featuredProducts);
			})
			.catch((err) => console.log('err', err));
	};

	useEffect(() => {
		getProduct();
	}, []);
	return (
		<div className=" bg-light ">
			<div className=" container  text-start">
				<div className="d-flex justify-content-center pt-5">
					<hr
						className="bg-dark fw-bold"
						style={{
							width: '50px',
							height: '2px',
						}}
					></hr>
				</div>
				<h2 className="text-center mt-2">Featured Products</h2>
				<AliceCarousel
					className="text-start"
					mouseTracking
					// items={items}
					responsive={responsive}
				>
					{products.map((item) => (
						<div
							className="item img-fliud text-center  bg-white mx-2 mt-5"
							data-value="1"
							key={item.id}
						>
							<Link to={`/product/${item.id}`}>
								<img
									className="img-thumbnail"
									src={item.image}
								/>
							</Link>
							<div className="  mx-auto">
								<h4 style={{ color: '#7971ea' }}>
									{item.name}
								</h4>
								<div>
									<p
										className="text-muted px-4 overflow-hidden"
										style={{ height: '80px' }}
									>
										{item.description}{' '}
									</p>
								</div>
								<p
									className=" fs-5"
									style={{ color: '#7971ea' }}
								>
									Rs. {item.price}
								</p>
							</div>
						</div>
					))}
				</AliceCarousel>
			</div>
		</div>
	);
};

export default SectionProducts;
