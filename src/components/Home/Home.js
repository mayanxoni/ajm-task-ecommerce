import React from 'react';
import App from '../../App';
import Banner from './Banner';
import BigSaleSection from './BigSaleSection';
import Category from './Category';
import Feature from './Feature';
import SectionProducts from './SectionProducts';

const Home = () => {
	return (
		<App>
			<Banner />
			<Feature />
			<Category />
			<SectionProducts />
			<BigSaleSection />
		</App>
	);
};
export default Home;
