import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../../SharedPages/Loading';
import Review from './Review';

const Reviews = () => {
    const navigate = useNavigate()
    const { isLoading, data } = useQuery('reviews', () =>
        fetch('http://localhost:5000/reviews').then(res =>
            res.json()))


    if (isLoading) {
        return <Loading />
    }
    const reviews = data.map(d => d).reverse()

    return (
        <div className='bg-white lg:w-5/6 mx-auto mt-24 p-5 rounded-lg'>
            <h1 className='mb-16 text-primary text-3xl font-semibold text-center'>What our customers say?</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {
                    reviews.slice(0, 8).map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
            <div className='flex items-center justify-center mt-5'><button onClick={() => navigate('/allreviews')} className='btn btn-secondary text-xl'>See All Reviews ➾</button></div>
        </div>
    );
};

export default Reviews;