import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import HomePageTools from './HomePageTools/HomePageTools';
import Reviews from './Reviews/Reviews';




const Home = () => {
    return (
        <div>
            <Banner />
            <HomePageTools />
            <BusinessSummary />
            <Reviews />
        </div>
    );
};

export default Home;