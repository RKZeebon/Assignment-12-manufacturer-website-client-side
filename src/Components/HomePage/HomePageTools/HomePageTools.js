import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../../SharedPages/Loading';
import Tool from './Tool';

const HomePageTools = () => {
    const navigate = useNavigate()
    const { isLoading, data } = useQuery('homePageTools', () =>
        fetch('http://localhost:5000/tools').then(res =>
            res.json()))


    if (isLoading) {
        return <Loading />
    }
    const homePageTools = data.map(d => d).reverse().slice(0, 5)
    return (
        <div className='bg-white lg:w-5/6 mx-auto mt-24 p-5 rounded-lg'>
            <h1 className='mb-16 text-primary text-3xl font-semibold text-center'>Available Tools </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {
                    homePageTools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
            <div className='flex items-center justify-center mt-5'><button onClick={() => navigate('/alltools')} className='btn btn-secondary text-xl'>See All Tools ➾</button></div>
        </div>
    );
};

export default HomePageTools;