import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../SharedPages/Loading';

const Order = () => {
    const id = useParams()
    const [user, userisLoading] = useAuthState(auth);
    const [quantityAlart, setQuantityAlart] = useState('')
    const { isLoading, data } = useQuery('tool', () =>
        fetch(`http://localhost:5000/tool/${id.id}`).then(res =>
            res.json()))


    if (isLoading || userisLoading) {
        return <Loading />
    }

    const { title, price, available, minOrder, text, img } = data;

    const handleOrder = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const address = event.target.address.value
        const phone = event.target.phone.value
        const quantity = event.target.quantity.value
        if (parseInt(quantity) < parseInt(minOrder) || parseInt(quantity) > parseInt(available)) {
            const alart = <p className='text-lg text-red-500'>You have to order for minimum: {minOrder} and maximum: {available}</p>
            setQuantityAlart(alart)
            return;
        }
        else {
            setQuantityAlart('')

        }

    }
    return (
        <div className="min-h-full p-5 lg:w-5/6 mx-auto bg-white rounded-lg mt-2">
            <div className="hero-content flex-col lg:flex-row max-w-full my-12">
                <div className='lg:w-1/2'>
                    <img className='w-1/2' src={img} alt='' />
                    <h1 className="text-5xl font-bold pb-5">{title}</h1>
                    <p className="py-1 text-lg"><span className='font-bold'>Price:</span> ${price}</p>
                    <p className="py-1 text-lg"><span className='font-bold'>Available:</span> {available}</p>
                    <p className="py-1 text-lg"><span className='font-bold'>Min. Order:</span> {minOrder}</p>
                    <p className="py-1 text-lg"><span className='font-bold'>Description:</span> {text}</p>
                </div>
                <div className='lg:w-1/2 flex justify-center'>

                    <form onSubmit={handleOrder} class="form-control lg:w-3/5">
                        <h2 className='text-center mb-5 text-primary text-3xl font-semibold'>Fill out this order form</h2>
                        <label class="label">
                            <span class="label-text">Your name:</span>
                        </label>
                        <input name='name' type="text" disabled value={user.displayName} class="input input-bordered" />

                        <label class="label mt-4">
                            <span class="label-text">Your Email:</span>
                        </label>
                        <input name='email' type="text" disabled value={user.email} class="input input-bordered" />

                        <label class="label mt-4">
                            <span class="label-text">Your Address:</span>
                        </label>
                        <textarea name='address' required class="textarea textarea-bordered h-24" placeholder="Address"></textarea>


                        <label class="label mt-4">
                            <span class="label-text">Your Phone number:</span>
                        </label>
                        <input name='phone' required type="text" placeholder='Your Phone number' class="input input-bordered" />

                        <label class="label mt-4">
                            <span class="label-text">Quantity:</span>
                        </label>
                        <input name='quantity' required type="number" defaultValue={minOrder} class="input input-bordered" />
                        {quantityAlart}
                        <input type="submit" value="Place Order" className="btn btn-primary px-8 text-lg uppercase font-semibold bg-gradient-to-r from-primary to-secondary mt-8" />


                    </form>
                </div>
            </div>
        </div>
    )
};

export default Order;