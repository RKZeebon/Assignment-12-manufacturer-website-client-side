import React from 'react';
import UpComingTool from './UpComingTool';

const UpcomingTools = () => {
    const upcomingtools = [
        { title: "Polishers", img: "https://i.ibb.co/GRj3t1f/Polishers.jpg" },
        { title: "Power Saw", img: "https://i.ibb.co/fNKvRmR/Power-Saw.jpg" },
        { title: "Tile Cutter", img: "https://i.ibb.co/nDtPpwS/Tile-Cutter.jpg" },
        { title: "Trowel", img: "https://i.ibb.co/fY5YTkn/Trowel.jpg" },
    ]
    return (
        <div className='bg-white lg:w-5/6 mx-auto mt-24 p-5 rounded-lg'>
            <h1 className='mb-16 text-primary text-3xl font-semibold text-center'>Upcoming Tools</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
                {
                    upcomingtools.map((tool, index) => <UpComingTool
                        key={index}
                        tool={tool}
                    ></UpComingTool>)
                }
            </div>
        </div>
    );
};

export default UpcomingTools;