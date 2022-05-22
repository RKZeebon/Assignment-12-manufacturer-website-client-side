import React from 'react';


const MyOrder = ({ order, index, setOrderID }) => {

    const { _id, tool, quantity, payment } = order;
    const handlecancelOrder = (id) => {
        setOrderID(id)
    }


    return (

        <tr>
            <th>{index + 1}</th>
            <td>{tool}</td>
            <td>{quantity}</td>
            <td>
                {
                    payment ? <span className='text-xl bg-secondary px-7 py-2 rounded-lg text-green-700 uppercase'>Paid</span> : <button className='btn btn-primary'>Pay Now</button>
                }
            </td>
            <td>{
                payment ?
                    <span className='text-lg font-bold text-primary'>Processing</span>
                    :
                    <label onClick={() => handlecancelOrder(_id)} for="cancel-order" title='Cancel this order' className='text-xl font-bold bg-red-300 hover:bg-red-500 px-4 py-2 rounded-full'>X</label>
            }</td>
        </tr>

    );
};

export default MyOrder;