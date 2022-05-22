import React, { useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { CancelOrderContext } from '../../App';
import CancelOrderModal from './MyOrders/CancelOrderModal';

const Dashboard = () => {
    const orderId = useContext(CancelOrderContext)
    const navigate = useNavigate()
    return (
        <div className='min-h-full p-5 lg:w-5/6 mx-auto bg-white rounded-lg mt-2'>
            <CancelOrderModal
                orderId={orderId}
            />
            <div className="drawer drawer-mobile">
                <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <div className='pt-1 flex justify-end'>
                        <label htmlFor="dashboardDrawer" className="bg-primary text-xl px-3 lg:hidden rounded-md ">Sidebar</label>
                    </div>
                    {/* <!-- Page content here --> */}

                    <div className='p-5'>
                        <h2 className='text-2xl font-bold text-primary text-center'>Welcome to your Dashboard</h2>
                        <Outlet />

                    </div>

                </div>

                <div className="drawer-side w-48 rounded-lg">
                    <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto bg-base-100 text-base-content">
                        <li>
                            <label htmlFor="dashboardDrawer" onClick={() => navigate('/dashboard')} >My Orders </label>
                        </li>
                        <li><label htmlFor="dashboardDrawer" onClick={() => navigate('/dashboard/addreview')} >Add A Review</label></li>

                        <li><label htmlFor="dashboardDrawer" onClick={() => navigate('/dashboard/myprofile')}>My Profile</label></li>
                    </ul>

                </div>
            </div>
        </div >
    );
};

export default Dashboard;