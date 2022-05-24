import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../Assets/Social/facebook.jpg'
import instagram from '../../Assets/Social/instagram.png'
import linkedin from '../../Assets/Social/linkedin.png'
import twitter from '../../Assets/Social/twitter.png'

const Footer = () => {
    return (
        <div className='bg-primary text-white'>
            <div className='lg:w-4/6 lg:mx-auto p-5'>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-xl mb-2'>Connect:</h1>
                        <div>
                            <div className='mb-2 flex items-center cursor-pointer bg-white p-2 rounded-lg'>
                                <img className='w-8 rounded' src={facebook} alt="" />
                                <p className='ml-2 text-black font-semibold text-lg'>Facebook</p>
                            </div>
                            <div className='mb-2 flex items-center cursor-pointer bg-white p-2 rounded-lg'>
                                <img className='w-8' src={instagram} alt="" />
                                <p className='ml-2 text-black font-semibold text-lg'>Instagram</p>
                            </div>
                            <div className='mb-2 flex items-center cursor-pointer bg-white p-2 rounded-lg'>
                                <img className='w-8' src={linkedin} alt="" />
                                <p className='ml-2 text-black font-semibold text-lg'>Linkedin</p>
                            </div>
                            <div className='mb-2 flex items-center cursor-pointer bg-white p-2 rounded-lg'>
                                <img className='w-8' src={twitter} alt="" />
                                <p className='ml-2 text-black font-semibold text-lg'>Twitter</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl mb-2 font-bold'>Useful Links:</h1>
                        <div>
                            <Link className='ml-2 text-lg block' to='/alltools'>Tools</Link>
                            <Link className='ml-2 text-lg block' to='/allreviews'>Reviews</Link>
                            <Link className='ml-2 text-lg block' to='/blogs'>Blogs</Link>
                            <Link className='ml-2 text-lg block' to='/portfolio'>Portfolio</Link>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <div>
                        <h1>Copyright Ⓒ RKZ Mason Tools 2022</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;