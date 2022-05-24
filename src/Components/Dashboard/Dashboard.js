import React, { useContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet, useNavigate } from 'react-router-dom';
import { CancelOrderContext } from '../../App';
import auth from '../../firebase.init';
import CancelOrderModal from './MyOrders/CancelOrderModal';

const Dashboard = () => {
    const orderId = useContext(CancelOrderContext)
    const navigate = useNavigate()
    const [user] = useAuthState(auth);
    const [userData, setUserData] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/user?email=${user.email}`)
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [user])


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
                        <h2 className='text-2xl font-bold text-primary text-center'>Welcome to Dashboard</h2>
                        <Outlet />

                    </div>

                </div>

                <div className="drawer-side w-48 rounded-lg">
                    <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto bg-base-100 text-base-content">
                        <li><label className='font-semibold' htmlFor="dashboardDrawer" onClick={() => navigate('/dashboard')}>My Profile</label></li>
                        {
                            !userData.role && <div><li>
                                <label className='font-semibold' htmlFor="dashboardDrawer" onClick={() => navigate('/dashboard/myorders')} >My Orders </label>
                            </li>
                                <li>
                                    <label className='font-semibold' htmlFor="dashboardDrawer" onClick={() => navigate('/dashboard/addreview')} >Add A Review</label>
                                </li></div>
                        }
                        {
                            userData.role && <div>
                                <li>
                                    <label className='font-semibold' htmlFor="dashboardDrawer" onClick={() => navigate('/dashboard/manageorders')} >Manage Orders</label>
                                </li>
                                <li>
                                    <label className='font-semibold' htmlFor="dashboardDrawer" onClick={() => navigate('/dashboard/addtool')} >Add Tool</label>
                                </li>
                                <li>
                                    <label className='font-semibold' htmlFor="dashboardDrawer" onClick={() => navigate('/dashboard/users')} >All Users</label>
                                </li>
                                <li>
                                    <label className='font-semibold' htmlFor="dashboardDrawer" onClick={() => navigate('/dashboard/managetools')} >Manage Tools</label>
                                </li>
                            </div>
                        }

                    </ul>

                </div>
            </div>
        </div >
    );
};

export default Dashboard;