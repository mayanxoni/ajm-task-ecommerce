import React from 'react';
import App from '../../App';
import { API } from '../../backend';
import Banner from './Banner';
import Category from './Category';
import Feature from './Feature';
import SectionProducts from './SectionProducts';

const Home = () => {
    console.log("API IS", API);
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