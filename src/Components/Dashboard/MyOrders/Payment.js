import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Payment = () => {
    const id = useParams()
    const orderId = id.id
    const [order, setOrder] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/myorder/${orderId}`)
            .then(res => res.json())
            .then(data => setOrder(data))

    }, [orderId])
    const { tool, quantity, totalDue, } = order;
    return (
        <div className="min-h-full p-5 lg:w-5/6 mx-auto bg-white rounded-lg mt-2">
            <div className="hero-content flex-col lg:flex-row max-w-full my-12">
                <div className='lg:w-1/2'>

                    <h1 className="text-xl font-bold pb-5"> You are paying for <span className='text-primary text-2xl'>{tool}</span></h1>

                    <p className="text-xl font-bold pb-5">Quantity: <span className='text-primary text-2xl'>{quantity}</span></p>

                    <p className="text-xl font-bold pb-5">Total Price: <span className='text-primary text-2xl'>{totalDue} </span></p>

                </div>
                <div className='lg:w-1/2 flex justify-center'>

                    <form className="form-control lg:w-3/5">
                        <h2 className='text-center mb-5 text-primary text-3xl font-semibold'>Payment Information</h2>
                        <label className="label">
                            <span className="label-text">Your name:</span>
                        </label>
                        <input name='name' type="text" disabled value={"user.displayName"} className="input input-bordered" />

                        <label className="label mt-4">
                            <span className="label-text">Your Email:</span>
                        </label>
                        <input name='email' type="text" disabled value={"user.email"} className="input input-bordered" />

                        <label className="label mt-4">
                            <span className="label-text">Your Address:</span>
                        </label>
                        <textarea name='address' required className="textarea textarea-bordered h-24" placeholder="Address"></textarea>


                        <label className="label mt-4">
                            <span className="label-text">Your Phone number:</span>
                        </label>
                        <input name='phone' required type="text" placeholder='Your Phone number' className="input input-bordered" />

                        <label className="label mt-4">
                            <span className="label-text">Quantity:</span>
                        </label>
                        <input name='quantity' required type="number" defaultValue={"minOrder"} className="input input-bordered" />

                        <input type="submit" value="Place Order" className="btn btn-primary px-8 text-lg uppercase font-semibold bg-gradient-to-r from-primary to-secondary mt-8" />
                    </form>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Payment;