import React from 'react';

const ManageOrder = ({ order, index, refetch }) => {
    const { _id, tool, quantity, payment, name, email, phone, shipped } = order;
    const handleStatus = (id) => {

        fetch(`http://localhost:5000/shipping/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
        })

    }

    let status;
    if (payment && shipped) {

        status = "shipped"
    }
    else if (payment) {
        status = "Pending"
    }
    else if (!payment) {
        status = "Waiting for payment"
    }

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
            <td>{status}</td>
            <td>
                {(!shipped && payment) && <button onClick={() => handleStatus(_id)} className='btn btn-primary'>Deliver</button>}
            </td>
        </tr>
    );
};

export default ManageOrder;