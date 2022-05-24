import React from 'react';

const Skill = ({ skill }) => {
    const { name, img } = skill;
    return (
        <div className='shadow-lg rounded-xl p-2'>
            <div className='h-[100px] m-2'><img className='w-[80px] mx-auto' src={img} alt="" /></div>
            <h2 className='text-center text-xl font-semibold'>{name}</h2>
        </div>
    );
};

export default Skill;