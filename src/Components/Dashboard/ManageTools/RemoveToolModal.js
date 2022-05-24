import React from 'react';
import { toast } from 'react-toastify';

const RemoveToolModal = ({ removingToolId, removingToolTitle, refetch }) => {

    const confirmRemove = () => {
        fetch(`http://localhost:5000/tool/${removingToolId}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.error('Item removed successfully')
                    refetch()
                }
            })

    }
    return (
        <div>
            <input type="checkbox" id="removeToolModal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">You are about to remove: <span className='text-red-500'>{removingToolTitle}</span></h3>
                    <p class="py-4">Are you seru, You want to remove this?</p>
                    <div className='flex justify-evenly mt-8'>
                        <label onClick={confirmRemove} htmlFor="removeToolModal" className="btn btn-error px-8 text-xl">Yes</label>
                        <label htmlFor="removeToolModal" className="btn btn-secondary px-8 text-xl">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RemoveToolModal;