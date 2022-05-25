import React from 'react';
import { toast } from 'react-toastify';

const RemoveToolModal = ({ removingToolId, removingToolTitle, refetch }) => {

    const confirmRemove = () => {
        fetch(`https://rkz-mason-tools.herokuapp.com/tool/${removingToolId}`, {
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
            <input type="checkbox" id="removeToolModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">You are about to remove: <span className='text-red-500'>{removingToolTitle}</span></h3>
                    <p className="py-4">Are you seru, You want to remove this?</p>
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