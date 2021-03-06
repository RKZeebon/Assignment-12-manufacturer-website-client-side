import React from 'react';
import { useNavigate } from 'react-router-dom';


const MyOrder = ({ order, index, setOrderID }) => {
    const navigate = useNavigate()
    const { _id, tool, quantity, payment, totalDue, trnsactionId } = order;
    const handlecancelOrder = (id) => {
        setOrderID(id)
    }


    return (

        <tr>
            <th>{index + 1}</th>
            <td>{tool}</td>
            <td>{quantity}</td>
            <td>${totalDue}</td>
            <td>
                {
                    payment ? <span className='text-xl bg-secondary px-7 py-2 rounded-lg text-green-700 uppercase'>Paid</span> : <button onClick={() => navigate(`payment/${_id}`)} className='btn btn-primary'>Pay Now</button>
                }
            </td>
            <td>{
                payment ?
                    <span className='text-lg font-bold text-primary'>Processing</span>
                    :
                    <label onClick={() => handlecancelOrder(_id)} htmlFor="cancel-order" title='Cancel this order' className='text-xl font-bold bg-red-300 hover:bg-red-500 px-4 py-2 rounded-full cursor-pointer'>X</label>
            }</td>
            <td className='w-48'>{trnsactionId}</td>
        </tr>

    );
};

export default MyOrder;