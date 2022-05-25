import React from 'react';
import revenue from '../../../Assets/icon/revenue.png'
import tools from '../../../Assets/icon/tools.png'
import client from '../../../Assets/icon/client.png'
import feedback from '../../../Assets/icon/feedback.ico'
import BusinessSummaryCard from './BusinessSummaryCard';

const BusinessSummary = () => {
    const cardsData = [
        { img: revenue, title: "Revenue", value: '50K' },
        { img: tools, title: "Tools", value: 500 },
        { img: client, title: "Happy Customers", value: 250 },
        { img: feedback, title: "Reviews", value: 150 }]

    return (
        <div className='bg-white lg:w-5/6 mx-auto mt-24 p-5 rounded-lg'>
            <div>
                <h1 className='mb-16 text-primary text-3xl font-semibold text-center'>Business Summary</h1>
                <div className='grid grid-cols-1 lg:grid-cols-4'>
                    {
                        cardsData.map((card, index) => <BusinessSummaryCard
                            key={index}
                            card={card}
                        ></BusinessSummaryCard>)
                    }
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;