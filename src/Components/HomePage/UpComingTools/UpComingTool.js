import React from 'react';

const UpComingTool = ({ tool }) => {
    const { title, img } = tool
    return (

        <div className="card max-w-sm shadow-xl mx-auto">
            <figure className="px-10 pt-10">
                <img className='w-[200px] h-[200px] rounded-xl' src={img} alt={title} />
            </figure>
            <div className="card-body items-center text-center text-2xl font-semibold text-primary">
                <p>{title}</p>

            </div>
        </div>
    );
};

export default UpComingTool;