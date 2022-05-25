import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm'





const stripePromise = loadStripe('pk_test_51L3IdxKp3koAHZ4R1tWEnvUicFN0jMKMyDHjcb621wPQZuPZyCPch7TFXsDo0QrFCLoVocW4Fex0JUmYxIAp5HfO00KVlvd74H');


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
        <div className="min-h-full p-5 lg:w-5/6 mx-auto bg-white rounded-lg mt-2 flex justify-center">
            <div className="max-w-full w-96 my-12">
                <div className='mb-20'>

                    <div className='shadow-lg p-5 rounded-lg'>
                        <h1 className="text-xl font-bold pb-5"> You are paying for <span className='text-primary text-2xl'>{tool}</span></h1>

                        <p className="text-xl font-bold pb-5">Quantity: <span className='text-primary text-2xl'>{quantity}</span></p>

                        <p className="text-xl font-bold pb-5">Total Price: <span className='text-primary text-2xl'>{totalDue} </span></p>
                    </div>

                </div>
                <div className='shadow-lg rounded-lg'>

                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;