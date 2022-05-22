import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../SharedPages/Loading';
import AllTool from './AllTool';

const AllTools = () => {
    const { isLoading, data: tools } = useQuery('allTools', () =>
        fetch('http://localhost:5000/tools').then(res =>
            res.json()))


    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='min-h-full p-5 lg:w-5/6 mx-auto bg-white rounded-lg mt-2
        '>
            <h1 className='mb-16 text-primary text-3xl font-semibold text-center'>Currently Available Tools</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {
                    tools.map(tool => <AllTool
                        key={tool._id}
                        tool={tool}
                    ></AllTool>)
                }
            </div>
        </div>
    );
};

export default AllTools;