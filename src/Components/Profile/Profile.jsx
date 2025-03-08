import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>

            <h1>Welcome {user.email}</h1> : <h1>Welcome to Profile</h1>

        </div>
    );
};

export default Profile;