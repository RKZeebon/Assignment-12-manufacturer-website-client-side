import React from 'react';

const ManageOrder = ({ order, index }) => {
    const { _id, tool, quantity, payment, name, email, phone } = order;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{tool}</td>
            <td>{quantity}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>
                {
                    payment ? <span className='text-lg bg-secondary px-7 py-2 rounded-lg text-green-700 uppercase'>Paid</span> : <span className='text-lg bg-red-300 px-7 py-2 rounded-lg text-red-700 uppercase'>Unpaid</span>
                }
            </td>
            <td>{
                payment ?
                    <span className='text-lg  text-primary'>Shipping</span>
                    :
                    <span className='text-lg  text-red-700'>Waiting For Payment</span>
            }</td>
        </tr>
    );
};

export default ManageOrder;