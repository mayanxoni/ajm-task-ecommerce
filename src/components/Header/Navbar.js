import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../../App.css';

const Navbar = () => {
	return (
		<div className="text-center container" style={{ fontSize: '16px' }}>
			<ul className="nav nav-tabs justify-content-center">
				<li className="nav-item  m-3 d-flex">
					<p className=" navLinks  my-auto">
						{' '}
						<Link
							className=" navLinks"
							to="/"
							style={{ color: '#404040' }}
						>
							HOME
						</Link>
					</p>
				</li>
				<li className="nav-item m-3 d-flex">
					<p className=" navLinks  my-auto">
						{' '}
						<Link
							className=" navLinks"
							to="/shop"
							style={{ color: '#404040' }}
						>
							SHOP
						</Link>
					</p>
				</li>

				<li className="nav-item m-3 d-flex">
					<p className=" navLinks my-auto">
						{' '}
						<Link
							className=" navLinks"
							to="/"
							style={{ color: '#404040' }}
						>
							CATALOGUE
						</Link>
					</p>
				</li>
				<li className="nav-item m-3 d-flex">
					<p className=" navLinks  my-auto">
						{' '}
						<Link
							className=" navLinks"
							to="/"
							style={{ color: '#404040' }}
						>
							CONTACT
						</Link>{' '}
					</p>
				</li>
			</ul>
		</div>
	);
};
export default withRouter(Navbar);
