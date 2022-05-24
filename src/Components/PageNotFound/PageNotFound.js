import React from 'react';
import pageNotFound from '../../Assets/images/404_page.jpg'

const PageNotFound = () => {
    return (
        <div className='min-h-full p-5 lg:w-5/6 mx-auto bg-white rounded-lg mt-2'>
            <img className='w-full' src={pageNotFound} alt="" />
        </div>
    );
};

export default PageNotFound;