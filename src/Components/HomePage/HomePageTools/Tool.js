import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, title, price, available, minOrder, text, img } = tool
    const navigate = useNavigate()
    return (
        <div className="card shadow-xl">
            <figure><img src={img} alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-lg'><span className='font-semibold underline'>Price:</span> ${price}</p>
                <p className='text-lg'><span className='font-semibold underline'>Available:</span> {available}</p>
                <p className='text-lg'><span className='font-semibold underline'>Min. Order:</span> {minOrder}</p>
                <p className='text-lg'><span className='font-semibold underline'>Description:</span> {text.length > 100 ? text.slice(0, 100) + " ..." : text}</p>
                <div onClick={() => navigate(`/order/${_id}`)} className="card-actions justify-end mt-5">
                    <button className="btn btn-primary px-8 text-lg uppercase font-semibold bg-gradient-to-r from-primary to-secondary">Buy Now</button>
                </div>
            </div>
        </div >
    );
};

export default Tool;