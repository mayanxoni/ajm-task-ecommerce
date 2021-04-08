import React from 'react';
import Women from '../../images/women.jpg';
import Children from '../../images/children.jpg';
import Men from '../../images/men.jpg';

const Category = () => {
	return (
		<div className="border-bottom">
			<div className="container px-5">
				<div className="row my-5 mx-2">
					<div className="col-sm-4 my-4" style={{ minWidth: '00px' }}>
						<img
							className="img-fluid"
							src={Women}
							alt="women products"
						/>
					</div>
					<div className="col-sm-4 my-4" style={{ minWidth: '00px' }}>
						<img
							className="img-fluid"
							src={Children}
							alt="children products"
						/>
					</div>
					<div className="col-sm-4 my-4" style={{ minWidth: '00px' }}>
						<img
							className="img-fluid"
							src={Men}
							alt="men products"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Category;
