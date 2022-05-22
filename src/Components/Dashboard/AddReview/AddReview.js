import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const [ratingError, setRatingError] = useState('')

    const handleAddReview = event => {
        event.preventDefault()
        const rating = event.target.rating.value
        const comment = event.target.comment.value
        if (parseFloat(rating) > 5 || parseFloat(rating) < 0) {
            setRatingError(<p className='text-lg text-red-600'>Please give a number from 0 to 5.</p>)
        }
        else {
            setRatingError('')
            fetch('http://localhost:5000/review', {
                method: 'POST',
                body: JSON.stringify({ name: user.displayName, email: user.email, rating, comment, img: user.photoURL }),
                headers: {
                    'Content-type': 'application/json',
                },
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success("Your review added successfully")
                        event.target.reset()
                    }
                    else {
                        toast.error("Something went wrong, try again later")
                    }
                });

        }

    }

    return (
        <div className='min-h-full p-5 lg:w-5/6 mx-auto bg-white rounded-lg mt-2 flex justify-center'>

            <form onSubmit={handleAddReview} class="form-control w-full max-w-xs">
                <h1 className='text-xl text-center font-semibold mt-5 mb-2'>Add a Review</h1>
                <label class="label">
                    <span class="label-text">Ratings out of 5:</span>
                </label>
                <input name='rating' type="number" placeholder="5" class="input input-bordered w-full max-w-xs" required />

                {ratingError}

                <label class="label">
                    <span class="label-text">Your Comment</span>
                </label>
                <textarea name='comment' class="textarea textarea-bordered h-24" placeholder="Comment" required></textarea>


                <input type="submit" value="Add Review" className='btn btn-primary px-8 text-lg uppercase font-semibold bg-gradient-to-r from-primary to-secondary mt-4' />
            </form>
        </div>
    );
};

export default AddReview;