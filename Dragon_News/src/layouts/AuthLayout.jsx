import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';

const AuthLayout = () => {
    return (
        <div className='bg-gray-100 h-screen'>
                <nav className='w-10/12 mx-auto'>
                <NavBar></NavBar>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;