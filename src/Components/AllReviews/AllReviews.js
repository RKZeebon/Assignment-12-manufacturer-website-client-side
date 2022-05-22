import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../SharedPages/Loading';
import AllReview from './AllReview';

const AllReviews = () => {
    const { isLoading, data: reviews } = useQuery('reviews', () =>
        fetch('http://localhost:5000/reviews').then(res =>
            res.json()))


    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='min-h-full p-5 lg:w-5/6 mx-auto bg-white rounded-lg mt-2'>
            <h1 className='mb-16 text-primary text-3xl font-semibold text-center'>Our Customar Reviews</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5'>
                {
                    reviews.map(review => <AllReview
                        key={review._id}
                        review={review}
                    ></AllReview>)
                }
            </div>
        </div>
    );
};

export default AllReviews;