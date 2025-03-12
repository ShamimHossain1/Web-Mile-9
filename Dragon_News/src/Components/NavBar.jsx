import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import userr from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const NavBar = () => {

    const { user, setUser, createNewUser, logIn, logOut, googleLogin } = useContext(AuthContext);
    const navigate = new useNavigate();
    // console.log(user.photoURL);
    const handleLogout = () => {
        logOut()
            .then((result) => {
                navigate('/auth/login')
            }).catch((err) => {

            });
    }

    return (
        <div className='flex justify-between items-center '>
            <div>
                <h2 className='text-[#706F6F] text-2xl font-semibold'>{user && user.displayName}</h2>
            </div>
            <div className='nav flex gap-5 items-center my-8' >

                <Link to='/'><p className='text-[#706F6F] text-xl'>Home</p></Link>
                <Link to='/news'><p className='text-[#706F6F] text-xl'>About</p></Link>
                <Link to='/login'><p className='text-[#706F6F] text-xl'>Career</p></Link>

            </div>
            <div className="login flex gap-5 items-center">

                <img
                    className="w-14 bg-[#f3f3f3] rounded-[20px] p-1"
                    src={user && user.photoURL ? user.photoURL : userr}
                    alt="User Profile"
                />

                {
                    user ?
                        <Link onClick={handleLogout} className='bg-[#403F3F] text-white px-4 text-xl font-semibold py-2 '>Log Out</Link>
                        :
                        <Link to={"/auth/login"} className='bg-[#403F3F] text-white px-4 text-xl font-semibold py-2'>Login</Link>
                }
            </div>

        </div>
    );
};

export default NavBar;