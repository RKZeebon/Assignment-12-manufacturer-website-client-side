import React from 'react';
import { useNavigate } from 'react-router-dom';


const ManageTool = ({ tool, index, handleRemove }) => {
    const { _id, title, available, price, minOrder } = tool
    const navigate = useNavigate()
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{title}</td>
            <td>{available}</td>
            <td>{minOrder}</td>
            <td>{price}</td>
            <td className='text-center'>
                <button onClick={() => navigate(`updatetool/${_id}`)} className='btn btn-primary mr-2'>update</button>
                <label htmlFor="removeToolModal" onClick={() => handleRemove(_id, title)} className='btn btn-error'>Remove </label>
            </td>


        </tr>
    );
};

export default ManageTool;