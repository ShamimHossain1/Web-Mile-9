import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Home = () => {
        const {user} = useContext(AuthContext);
    return (
        <div>
            {
                user ? <h1>Welcome {user.email}</h1> : <h1>Welcome to Home</h1>
            }
        </div>
    );
};

export default Home;