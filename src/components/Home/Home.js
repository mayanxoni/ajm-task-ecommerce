import React from 'react';
import App from '../../App';
import { API } from '../../backend';
import Banner from './Banner';
import Category from './Category';
import Feature from './Feature';
import SectionProducts from './SectionProducts';

const Home = () => {
    
    return(
        <App>
            <Banner />
            <Feature />
            <Category />
            <SectionProducts />
           
        </App>
    )
}
export default Home;