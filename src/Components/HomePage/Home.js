import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import ContactUs from './ContactUs/ContactUs';
import HomePageTools from './HomePageTools/HomePageTools';
import Reviews from './Reviews/Reviews';
import UpcomingTools from './UpComingTools/UpcomingTools';




const Home = () => {
    return (
        <div>
            <Banner />
            <HomePageTools />
            <BusinessSummary />
            <Reviews />
            <UpcomingTools />
            <ContactUs />
        </div>
    );
};

export default Home;