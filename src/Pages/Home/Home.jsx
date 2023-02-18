import React from 'react';
import SimpleSlider from './Banner/Banner';
import Brands from './Brands/Brands';
import Categories from './Categories/Categories';
import Explore from './Explore/Explore';
import FeartherProducts from './Ferther Products/FeartherProducts';
import Offer from './Offer/Offer';
import Prescription from './Prescription/Prescription';

// import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <SimpleSlider />
            <Prescription />
            <Categories />
            <Brands />
            <FeartherProducts />
            <Explore />
            <Offer/>
        </div>
    );
};

export default Home;