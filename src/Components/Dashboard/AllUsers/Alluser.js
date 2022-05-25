import React from 'react';
import { toast } from 'react-toastify';

const Alluser = ({ user, index }) => {
    const { name, email, role } = user;
    const newRole = 'admin'
    const handleMakeAdmin = email => {
        fetch(`https://rkz-mason-tools.herokuapp.com/user?email=${email}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ role: newRole })
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Admin made Successfully")
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                {
                    role ? <span className='bg-secondary px-7 py-2 rounded-lg text-green-700'>Already admin</span> : <button onClick={() => handleMakeAdmin(email)} className='btn btn-primary'>Make Admin</button>
                }
            </td>

        </tr>
    );
};

export default Alluser;