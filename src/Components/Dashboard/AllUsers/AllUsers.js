import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../SharedPages/Loading';
import Alluser from './Alluser';

const AllUsers = () => {
    const [user] = useAuthState(auth);

    const { isLoading, data: users, refetch } = useQuery('allUsers', () => fetch('https://rkz-mason-tools.herokuapp.com/allUser', {
        headers: {
            'authorization': localStorage.getItem('token'),
            'email': user.email
        }
    })
        .then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    refetch()
    return (
        <div>
            <h1 className='text-xl text-center font-semibold mt-5 mb-2'>Users</h1>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th>Sl No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <Alluser
                                key={user._id}
                                user={user}
                                index={index}
                            ></Alluser>)
                        }
                    </tbody>
                </table>

            </div>
            <ToastContainer />
        </div>
    );
};

export default AllUsers;