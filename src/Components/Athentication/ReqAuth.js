import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../SharedPages/Loading';


const ReqAuth = ({ children }) => {
    const [user, isLoading] = useAuthState(auth);
    const location = useLocation();

    if (isLoading) {
        return <Loading />
    }

    if (!user) {

        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default ReqAuth;