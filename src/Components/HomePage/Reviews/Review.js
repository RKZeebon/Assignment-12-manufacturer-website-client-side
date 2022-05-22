import React from 'react';

const Review = ({ review }) => {
    const { name, rating, comment, img } = review;
    return (
        <div>
            <div className="card min-h-full shadow-xl">
                <div className="card-body">
                    <div className="avatar flex justify-center">
                        <div className="w-16 rounded-full">
                            <img src={img} alt={name} />
                        </div>
                    </div>
                    <h2 className='card-title flex justify-center'>{name}</h2>
                    <p className='text-lg'><span className='font-semibold'>Rating:</span> {rating} of 5</p>
                    <p className='text-lg'><span className='font-semibold'>Comment:</span> {comment}</p>

                </div>
            </div>
        </div>
    );
};

export default Review;