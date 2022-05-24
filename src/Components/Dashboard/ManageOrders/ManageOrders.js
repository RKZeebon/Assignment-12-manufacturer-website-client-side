import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../SharedPages/Loading';
import ManageOrder from './ManageOrder';

const ManageOrders = () => {
    const [user] = useAuthState(auth);

    const { isLoading, data: orders } = useQuery('Orders', () => fetch('http://localhost:5000/orders', {
        headers: {
            'authorization': localStorage.getItem('token'),
            'email': user.email
        }
    })
        .then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h1 className='text-xl text-center font-semibold mt-5 mb-2'>All Orders</h1>


            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th>Sl No.</th>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Payment Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <ManageOrder
                                key={order._id}
                                order={order}
                                index={index}
                            ></ManageOrder>)
                        }
                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default ManageOrders;