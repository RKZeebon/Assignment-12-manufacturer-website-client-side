import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const ResetPass = () => {
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate()
    const handleReset = async (event) => {
        event.preventDefault()
        const email = event.target.email.value
        sendPasswordResetEmail(email)
        toast.success('Email sent')
        navigate('/login')
    }


    return (
        <div className='flex justify-center items-center p-5 lg:w-5/6 mx-auto min-h-[800px] bg-white rounded-lg mt-2'>
            <form onSubmit={handleReset} className=' shadow-lg p-5 w-96 rounded-3xl h-56 '>
                <label className="label mt-4">
                    <span className="label-text">Your Email:</span>
                </label>
                <input name='email' type="email" required placeholder='Your Email' className="input input-bordered w-full" />
                <input className='mt-5 w-full btn btn-primary px-8 text-lg uppercase font-semibold bg-gradient-to-r from-primary to-secondary block' type="submit" value="Reset" />
            </form>
        </div>
    );
};

export default ResetPass;