import React from 'react';
import Saleimg from '../../images/blog_1.jpg';
import { Link } from 'react-router-dom';
const BigSaleSection = () => {
	return (
		<div className=" block-8">
			<div className="container  p-5">
				<div className="d-flex justify-content-center pt-5">
					<hr
						className="bg-dark fw-bold"
						style={{
							width: '50px',
							height: '2px',
						}}
					></hr>
				</div>
				<div className="row justify-content-center  mb-5">
					<div className="col-sm-7 site-section-heading text-center pt-1">
						<h2>Big Sale!</h2>
					</div>
				</div>
				<div className="row align-items-center mx-5">
					<div className="col-sm-12 col-lg-7 mb-5">
						<Link to="/shop">
							<img
								src={Saleimg}
								alt="Image placeholder"
								className="img-fluid rounded"
							/>
						</Link>
					</div>
					<div className="col-md-12 col-lg-5 text-center pl-md-5">
						<h2>
							<Link
								to="/shop"
								style={{
									textDecoration: 'none',
									color: '#7971ea',
								}}
							>
								50% less in all items
							</Link>
						</h2>
						<p
							className="post-meta  mb-4"
							style={{ color: '#404040' }}
						>
							By{' '}
							<Link
								to="/shop"
								style={{
									textDecoration: 'none',
									color: '#7971ea',
								}}
							>
								Carl Smith
							</Link>{' '}
							<span className="block-8-sep text-muted">
								{' '}
								&#9679;
							</span>{' '}
							September 3, 2018
						</p>
						<p className="mx-5 text-muted">
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Quisquam iste dolor accusantium facere
							corporis ipsum animi deleniti fugiat. Ex, veniam?
						</p>
						<p>
							<Link
								to="/shop"
								className="btn btn-md text-white"
								style={{ backgroundColor: '#7971ea' }}
							>
								SHOP NOW
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default BigSaleSection;
