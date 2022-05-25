import React from 'react';
import contact from '../../../Assets/images/contact.jpg'

const ContactUs = () => {
    return (
        <div className="bg-white lg:w-5/6 mx-auto my-24 p-5 rounded-lg">
            <h1 className='mb-16 text-primary text-3xl font-semibold text-center'>Contact Us</h1>
            <div className="hero-content flex-col lg:flex-row max-w-full my-12">
                <div className='lg:w-1/2 flex justify-center'>
                    <img className='' src={contact} alt='' />
                </div>
                <div className='flex justify-center lg:w-1/2'>
                    <div>
                        <label className="label">
                            <span className="label-text">Your Name:</span>
                        </label>
                        <input name='name' type="text" placeholder='Your Name' className="input input-bordered w-full" />

                        <label className="label">
                            <span className="label-text mt-2">Your Email:</span>
                        </label>
                        <input name='email' type="email" placeholder='Your Email' className="input input-bordered w-full " />


                        <label className="label">
                            <span className="label-text mt-2">Your Message:</span>
                        </label>
                        <textarea name='message' placeholder='Your Message' className="input input-bordered w-full  h-24" />


                        <button className="w-full btn btn-primary px-8 text-lg uppercase font-semibold bg-gradient-to-r from-primary to-secondary mt-2">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;