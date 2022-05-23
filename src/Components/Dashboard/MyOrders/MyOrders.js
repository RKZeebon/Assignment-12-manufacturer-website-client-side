import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../SharedPages/Loading';
import MyOrder from './MyOrder';

const MyOrders = ({ setOrderID }) => {
    const [user] = useAuthState(auth);


    const { isLoading, data: orders, refetch } = useQuery('myOrders', () => fetch(`http://localhost:5000/myorders?email=${user.email}`, {
        headers: {
            'authorization': localStorage.getItem('token')
        }
    })
        .then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    refetch()

    return (
        <div>
            <h1 className='text-xl text-center font-semibold mt-5 mb-2'>My Orders</h1>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th>Sl No.</th>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Payment Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <MyOrder
                                key={order._id}
                                order={order}
                                index={index}
                                setOrderID={setOrderID}
                            ></MyOrder>)
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default MyOrders;