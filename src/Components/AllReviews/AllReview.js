import React from 'react';

const AllReview = ({ review }) => {
    const { name, rating, comment, img } = review
    return (
        <div>
            <div class="card min-h-full shadow-xl">
                <div class="card-body">
                    <div class="avatar flex justify-center">
                        <div class="w-16 rounded-full">
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

export default AllReview;