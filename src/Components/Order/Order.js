import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Loading from '../SharedPages/Loading';

const Order = () => {
    const id = useParams()
    const [user, userisLoading] = useAuthState(auth);
    const [quantityAlart, setQuantityAlart] = useState('')
    const [isDisabled, setIsDisabled] = useState(false)
    const { isLoading, data, refetch } = useQuery('tool', () =>
        fetch(`https://rkz-mason-tools.herokuapp.com/tool/${id.id}`).then(res =>
            res.json()))


    if (isLoading || userisLoading) {
        return <Loading />
    }

    const { title, price, available, minOrder, text, img } = data;

    const handleOrder = event => {
        event.preventDefault()
        const tool = title;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const quantity = event.target.quantity.value;
        const newAvailable = parseInt(available) - parseInt(quantity)
        const totalDue = parseInt(quantity) * parseInt(price)


        fetch('https://rkz-mason-tools.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ tool, name, email, address, phone, quantity, totalDue }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Your order placed successfully")
                    event.target.reset()
                }
                else {
                    toast.error("Something went wrong, try again later")
                }
            });



        fetch(`https://rkz-mason-tools.herokuapp.com/tool/${id.id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ available: newAvailable })
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    refetch()
                    event.target.reset()
                }
            })


    }

    const handleQuantity = (event) => {
        const value = event.target.value
        if (parseInt(value) > parseInt(available)) {
            setIsDisabled(true)
            const alart = <p className='text-lg text-red-500'>You have to order for minimum: {minOrder} and maximum: {available}</p>
            setQuantityAlart(alart)
        }
        else if (parseInt(value) < parseInt(minOrder)) {
            setIsDisabled(true)
            const alart = <p className='text-lg text-red-500'>You have to order for minimum: {minOrder} and maximum: {available}</p>
            setQuantityAlart(alart)
        }
        else {
            setIsDisabled(false)
            setQuantityAlart('')
        }
    }
    return (
        <div className="min-h-full p-5 lg:w-5/6 mx-auto bg-white rounded-lg mt-2">
            <div className="hero-content flex-col lg:flex-row max-w-full my-12">
                <div className='lg:w-1/2'>
                    <img className='w-1/2 mb-5' src={img} alt='' />
                    <h1 className="text-5xl font-bold pb-5">{title}</h1>
                    <p className="py-1 text-lg"><span className='font-bold'>Price:</span> ${price}</p>
                    <p className="py-1 text-lg"><span className='font-bold'>Available:</span> {available}</p>
                    <p className="py-1 text-lg"><span className='font-bold'>Min. Order:</span> {minOrder}</p>
                    <p className="py-1 text-lg"><span className='font-bold'>Description:</span> {text}</p>
                </div>
                <div className='lg:w-1/2 flex justify-center'>

                    <form onSubmit={handleOrder} className="form-control lg:w-3/5">
                        <h2 className='text-center mb-5 text-primary text-3xl font-semibold'>Fill out this order form</h2>
                        <label className="label">
                            <span className="label-text">Your name:</span>
                        </label>
                        <input name='name' type="text" disabled value={user.displayName} className="input input-bordered" />

                        <label className="label mt-4">
                            <span className="label-text">Your Email:</span>
                        </label>
                        <input name='email' type="text" disabled value={user.email} className="input input-bordered" />

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
                        <input onChange={handleQuantity} name='quantity' required type="number" defaultValue={minOrder} className="input input-bordered" />
                        {quantityAlart}
                        <input disabled={isDisabled} type="submit" value="Place Order" className="btn btn-primary px-8 text-lg uppercase font-semibold bg-gradient-to-r from-primary to-secondary mt-8" />
                    </form>
                </div>
                <ToastContainer />
            </div>
        </div>
    )
};

export default Order;