import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../SharedPages/Loading';
import Review from './Review';

const Reviews = () => {
    const { isLoading, data } = useQuery('reviews', () =>
        fetch('Reviews.json').then(res =>
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
                    reviews.slice(0, 5).map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>

        </div>
    );
};

export default Reviews;