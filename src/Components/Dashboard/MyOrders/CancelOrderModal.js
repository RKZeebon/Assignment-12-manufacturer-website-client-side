import React, { useContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { CancelOrderContext } from '../../../App';


const CancelOrderModal = () => {
    const orderId = useContext(CancelOrderContext)

    const [canceledOrder, setCanceledOrder] = useState({})
    useEffect(() => {
        fetch(`https://rkz-mason-tools.herokuapp.com/myorder/${orderId}`)
            .then(res => res.json())
            .then(data => setCanceledOrder(data))

    }, [orderId])


    const handlecancleOrder = () => {
        fetch(`https://rkz-mason-tools.herokuapp.com/myorder/${orderId}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.error("Your order canceled successfully")
                }
            })

    }
    return (
        <div className=''>
            <input type="checkbox" id="cancel-order" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">You are about to cancel the order for <span className='text-red-500'>{canceledOrder?.tool}</span></h3>

                    <p className="py-4 text-lg">Are you sure? You want to cancel this order?</p>


                    <div className='flex justify-evenly mt-8'>
                        <label onClick={handlecancleOrder} htmlFor="cancel-order" className="btn btn-error px-8 text-xl">Yes</label>
                        <label htmlFor="cancel-order" className="btn btn-secondary px-8 text-xl">No</label>
                    </div>

                </div>
            </div>
            <ToastContainer />
        </div >
    );
};

export default CancelOrderModal;