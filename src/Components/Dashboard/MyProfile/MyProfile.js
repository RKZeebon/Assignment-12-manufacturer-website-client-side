import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';


const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [userData, setUserData] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/user?email=${user.email}`)
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [user])

    const { email, education, location, phone, linkedin } = userData;


    const handleUpdateProfile = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const education = event.target.education.value
        const location = event.target.location.value
        const phone = event.target.phone.value
        const linkedin = event.target.linkedin.value
        fetch(`http://localhost:5000/user?email=${email}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ name, email, education, location, phone, linkedin })
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Your Profile Updated Successfully")
                }
            })

    }


    return (
        <div className='min-h-full p-5 lg:w-5/6 mx-auto bg-white rounded-lg mt-2 flex justify-center'>


            <form onSubmit={handleUpdateProfile} class="form-control w-full max-w-xs">
                <h1 className='text-xl text-center font-semibold mt-5 mb-2'>My Profile</h1>

                <label class="label">
                    <span class="label-text">Your Name:</span>
                </label>
                <input name='name' type="text" value={user.displayName} disabled class="input input-bordered w-full max-w-xs" />

                <label class="label mt-3">
                    <span class="label-text">Your Email:</span>
                </label>
                <input name='email' type="email" value={email} disabled class="input input-bordered w-full max-w-xs" />

                <label class="label mt-3">
                    <span class="label-text">Your Education:</span>
                </label>
                <input name='education' type="text" defaultValue={education} placeholder="Education" class="input input-bordered w-full max-w-xs" />

                <label class="label mt-3">
                    <span class="label-text">Your Location:</span>
                </label>
                <input name='location' type="text" defaultValue={location} placeholder="City Name" class="input input-bordered w-full max-w-xs" />

                <label class="label mt-3">
                    <span class="label-text">Your Phone Number:</span>
                </label>
                <input name='phone' type="text" defaultValue={phone} placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />

                <label class="label mt-3">
                    <span class="label-text">Your LinkedIn:</span>
                </label>
                <input name='linkedin' type="url" defaultValue={linkedin} placeholder="Profile Link" class="input input-bordered w-full max-w-xs" />

                <input className='btn btn-primary px-8 text-lg uppercase font-semibold bg-gradient-to-r from-primary to-secondary mt-4' type="submit" value="Save" />
            </form>
        </div>
    );
};

export default MyProfile;