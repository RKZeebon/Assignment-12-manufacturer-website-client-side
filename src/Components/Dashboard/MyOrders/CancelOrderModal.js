import React, { useContext, useEffect, useState } from 'react';
import { CancelOrderContext } from '../../../App';


const CancelOrderModal = () => {
    const orderId = useContext(CancelOrderContext)

    const [canceledOrder, setCanceledOrder] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/myorder/${orderId}`)
            .then(res => res.json())
            .then(data => setCanceledOrder(data))

    }, [orderId])


    const handlecancleOrder = () => {
        fetch(`http://localhost:5000/myorder/${orderId}`, {
            method: 'DELETE',
        })

    }
    return (
        <div className='z-40'>
            <input type="checkbox" id="cancel-order" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">You are about to cancel the order for <span className='text-red-500'>{canceledOrder?.tool}</span></h3>

                    <p class="py-4 text-lg">Are you sure? You want to cancel this order?</p>


                    <div className='flex justify-evenly mt-8'>
                        <label onClick={handlecancleOrder} for="cancel-order" class="btn btn-error px-8 text-xl">Yes</label>
                        <label for="cancel-order" class="btn btn-secondary px-8 text-xl">No</label>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default CancelOrderModal;