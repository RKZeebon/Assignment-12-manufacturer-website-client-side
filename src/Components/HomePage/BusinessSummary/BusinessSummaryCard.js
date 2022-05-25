import React from 'react';

const BusinessSummaryCard = ({ card }) => {
    const { img, title, value } = card;
    return (

        <div className="card w-96 shadow-xl mx-auto">
            <figure className="px-10 pt-10">
                <img className='w-[200px] h-[200px]' src={img} alt={title} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center text-2xl font-semibold text-primary">
                <h2>{value}+</h2>
                <p>{title}</p>

            </div>
        </div>


    );
};

export default BusinessSummaryCard;