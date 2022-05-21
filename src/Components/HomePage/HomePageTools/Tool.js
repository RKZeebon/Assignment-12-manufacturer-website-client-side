import React from 'react';

const Tool = ({ tool }) => {
    const { title, price, available, minOrder, text, img } = tool
    return (
        <div class="card shadow-xl">
            <figure><img src={img} alt={title} /></figure>
            <div class="card-body">
                <h2 class="card-title">{title}</h2>
                <p className='text-lg'><span className='font-semibold underline'>Price:</span> ${price}</p>
                <p className='text-lg'><span className='font-semibold underline'>Available:</span> {available}</p>
                <p className='text-lg'><span className='font-semibold underline'>Min. Order:</span> {minOrder}</p>
                <p className='text-lg'><span className='font-semibold underline'>Description:</span> {text.length > 100 ? text.slice(0, 100) + " ..." : text}</p>
                <div class="card-actions justify-end mt-5">
                    <button className="btn btn-primary px-8 text-lg uppercase font-semibold bg-gradient-to-r from-primary to-secondary">Buy Now</button>
                </div>
            </div>
        </div >
    );
};

export default Tool;