import React from 'react';

const UpComingTool = ({ tool }) => {
    const { title, img } = tool
    return (

        <div class="card max-w-sm shadow-xl mx-auto">
            <figure class="px-10 pt-10">
                <img className='w-[200px] h-[200px]' src={img} alt={title} class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center text-2xl font-semibold text-primary">
                <p>{title}</p>

            </div>
        </div>
    );
};

export default UpComingTool;