import React from 'react';
import Banner from '../banneer/Banner';
import AllServices from '../allServices/AllServices';
import DetailsServices from '../services/DetailsServices';
import FAQ from '../faq/FAQ';
import About from '../about/About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllServices></AllServices>
            <DetailsServices></DetailsServices>
            <FAQ></FAQ>
            <About></About>
            
            
        </div>
    );
};

export default Home;