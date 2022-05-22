import React from 'react';
import { useNavigate } from 'react-router-dom';
import bannerimg from '../../../Assets/images/banner-img.jpg'

const Banner = () => {
    const navigate = useNavigate()
    return (
        <div className="min-h-full p-5 lg:w-5/6 mx-auto bg-white rounded-lg mt-2">
            <div className="hero-content flex-col lg:flex-row-reverse max-w-full my-12">
                <div>
                    <img src={bannerimg} alt='' />
                </div>
                <div className=''>
                    <h1 className="text-5xl font-bold">Get Your Masonry tools!</h1>
                    <p className="py-6">We are here to provide your required tools for your business. We manufacture all kind of masonry tools by maintaining the quality.</p>
                    <button onClick={() => navigate('/alltools')} className="btn btn-primary px-8 text-lg uppercase font-semibold bg-gradient-to-r from-primary to-secondary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;