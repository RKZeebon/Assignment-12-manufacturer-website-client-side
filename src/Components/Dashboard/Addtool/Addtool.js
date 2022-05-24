import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Addtool = () => {

    const handleAddItem = event => {
        event.preventDefault()
        const title = event.target.name.value;
        const img = event.target.img.value;
        const price = event.target.price.value;
        const available = event.target.quantity.value;
        const minOrder = event.target.minOrder.value;
        const text = event.target.description.value;


        fetch('http://localhost:5000/addTool', {
            method: 'POST',
            body: JSON.stringify({
                title,
                img,
                price,
                available,
                minOrder,
                text,

            }),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then(data => {
                if (data.acknowledged) {
                    toast("Item added successfully")
                    event.target.reset()
                }
            });


    }

    return (
        <div className='min-h-full p-5 lg:w-5/6 mx-auto bg-white rounded-lg mt-2 flex justify-center'>
            <div className='flex justify-center'>

                <form onSubmit={handleAddItem} className="max-w-lg" >
                    <h1 className='text-xl text-center font-semibold mt-5 mb-2'>Add A New tool</h1>
                    <div className='mb-2 text-lg'>
                        <input className='rounded-lg p-2 w-full border-2 border-black' type="text" name="name" id="" placeholder='Tool Name' required />
                    </div>
                    <div className='mb-2 text-lg'>
                        <input className='rounded-lg p-2 w-full border-2 border-black' type="url" name="img" id="" placeholder='Image Url' pattern="https?://.+" />
                    </div>
                    <div className='mb-2 text-lg'>
                        <input className='rounded-lg p-2 w-full border-2 border-black' type="number" name="price" id="" placeholder='Price' required />
                    </div>
                    <div className='mb-2 text-lg'>
                        <input className='rounded-lg p-2 w-full border-2 border-black' type="number" name="quantity" id="" placeholder='Quantity' required />
                    </div>
                    <div className='mb-2 text-lg'>
                        <input className='rounded-lg p-2 w-full border-2 border-black' type="number" name="minOrder" id="" placeholder='Min. Order' required />
                    </div>
                    <div className='mb-2 text-lg'>
                        <textarea className='rounded-lg p-2 w-full border-2 border-black' name="description" id="" cols="30" rows="5" placeholder='Description'></textarea>
                    </div>
                    <div className='text-cente'><input className='btn btn-primary px-8 text-lg uppercase font-semibold bg-gradient-to-r from-primary to-secondary w-full' type="submit" value="Add Tool" /></div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Addtool;