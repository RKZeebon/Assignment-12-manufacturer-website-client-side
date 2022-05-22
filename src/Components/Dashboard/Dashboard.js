import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate()
    return (
        <div className='min-h-full p-5 lg:w-5/6 mx-auto bg-white rounded-lg mt-2'>

            <div class="drawer drawer-mobile">
                <input id="dashboardDrawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <div className='pt-1 flex justify-end'>
                        <label for="dashboardDrawer" class="bg-primary text-xl px-3 lg:hidden rounded-md ">Sidebar</label>
                    </div>
                    {/* <!-- Page content here --> */}

                    <div className='p-5'>
                        <h2 className='text-2xl font-bold text-primary text-center'>Welcome to your Dashboard</h2>
                        <Outlet />
                    </div>
                </div>

                <div class="drawer-side w-48 rounded-lg">
                    <label for="dashboardDrawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto bg-base-100 text-base-content">
                        <li>
                            <label for="dashboardDrawer" onClick={() => navigate('/dashboard')} >My Orders </label>
                        </li>
                        <li><label for="dashboardDrawer" onClick={() => navigate('/dashboard/addreview')} >Add A Review</label></li>

                        <li><label for="dashboardDrawer" onClick={() => navigate('/dashboard/myprofile')}>My Profile</label></li>
                    </ul>

                </div>
            </div>
        </div >
    );
};

export default Dashboard;