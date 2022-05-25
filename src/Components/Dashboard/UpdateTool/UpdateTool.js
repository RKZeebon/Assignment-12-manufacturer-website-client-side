import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../SharedPages/Loading';

const UpdateTool = () => {
    const id = useParams()
    const [updateError, setUpdateError] = useState('');
    const error = <p className='text-red-500 text-center mt-2'>Don't enter 0 or a nagative number</p>
    const updatingToolId = id.id
    const { isLoading, data: updatingTool, refetch } = useQuery('updatingTool', () =>
        fetch(`https://rkz-mason-tools.herokuapp.com/tool/${updatingToolId}`).then(res =>
            res.json()))


    if (isLoading) {
        return <Loading />
    }
    const { title, price, text, minOrder, img, available } = updatingTool;


    const handleUpdate = (event) => {
        event.preventDefault()
        const available = event.target.available.value
        const minOrder = event.target.minOrder.value
        const price = event.target.price.value
        if (parseFloat(available) < 1) {
            console.log(available, minOrder, price);
            setUpdateError(error)
        }
        else if (parseFloat(minOrder) < 1) {
            console.log(available, minOrder, price);
            setUpdateError(error)
        }
        else if (parseFloat(price) < 1) {
            console.log(available, minOrder, price);
            setUpdateError(error)
        }

        else {
            fetch(`https://rkz-mason-tools.herokuapp.com/tool/${updatingToolId}`, {
                method: "PUT",
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({ available, minOrder, price })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success("Tool Updated Successfully")
                        refetch()
                        event.target.reset()
                    }
                })
            setUpdateError('')
        }


    }

    return (
        <div>
            <h1 className='text-xl text-center font-semibold mt-5 mb-2'>Make changes for <span className='text-primary font-bold text-2xl'>{title}</span></h1>

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

                    <form onSubmit={handleUpdate} className="form-control lg:w-3/5">
                        <label className="label mt-4">
                            <span className="label-text">Available:</span>
                        </label>
                        <input name='available' required type="text" placeholder='Enter Available Quantity' className="input input-bordered" />

                        <label className="label mt-4">
                            <span className="label-text">Min. Order:</span>
                        </label>
                        <input name='minOrder' required type="number" placeholder='Enter Min. Order Quantity' className="input input-bordered" />

                        <label className="label mt-4">
                            <span className="label-text">Price:</span>
                        </label>
                        <input name='price' required type="text" placeholder='Enter Per Unit Price' className="input input-bordered" />
                        {updateError}
                        <input type="submit" value="Update" className="btn btn-primary px-8 text-lg uppercase font-semibold bg-gradient-to-r from-primary to-secondary mt-8" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default UpdateTool;