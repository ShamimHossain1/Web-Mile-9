import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    return (
        <div>
            {user &&
                loading ? (
                <span className='loading loading-spinner loading-lg'></span>
            ) : user ? (
                children
            ) : (
                <Navigate to="/login" />
            )}
        </div>
    );
};

export default PrivateRoute;