import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { toast } from 'react-toastify';

const CheckOutForm = ({ order }) => {
    const totalDue = order.totalDue || 1
    const stripe = useStripe()
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ totalDue }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            });
    }, [totalDue]);


    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message)

        } else {
            setCardError('')

        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: order.name,
                        email: order.email
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError?.message)
        }
        else {
            setCardError('')
            toast.success("Payment Successful")

            fetch(`http://localhost:5000/order/${order._id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
            })
        }
    }
    console.log(order._id);
    return (
        <form className='p-5' onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            {<p className='mt-5 text-red-500 font-semibold'>{cardError}</p>}
            <button className='btn btn-outline mt-5' type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
    );
};

export default CheckOutForm;