import React from 'react';
import { Link } from 'react-router-dom';
import user from '../assets/user.png'

const NavBar = () => {
    return (
        <div className='flex justify-between items-center '>
            <div></div>
            <div className='nav flex gap-5 items-center my-8' >

                <Link to='/'><p className='text-[#706F6F] text-xl'>Home</p></Link>
                <Link to='/news'><p className='text-[#706F6F] text-xl'>About</p></Link>    
                <Link to='/login'><p className='text-[#706F6F] text-xl'>Career</p></Link>

            </div>
            <div className="login flex gap-5 items-center">

                <img src={user}/>
                <button className='bg-[#403F3F] text-white px-4 text-xl font-semibold py-2'>Login</button>
                <button className='bg-[#403F3F] text-white px-4 text-xl font-semibold py-2 '>Log Out</button>
            </div>

        </div>
    );
};

export default NavBar;