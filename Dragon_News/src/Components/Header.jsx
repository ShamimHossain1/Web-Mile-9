import React from 'react';

import logo from '../assets/logo.png';
import { format } from 'date-fns';
const Header = () => {
    const date = new Date(); 

  const formattedDate = format(date, 'eeee, MMMM dd, yyyy');
    return (
        <div>
            <div className='flex flex-col gap-3 items-center justify-center mt-12 mb-5'>
                <img className='w-[550px]' src={logo} alt="logo" />
                <h2 className='text-[#706F6F] text-xl'>Journalism Without Fear or Favour</h2>
                <h2 className='text-[#706F6F] text-2xl font-semibold'>{formattedDate}</h2>

            </div>
        </div>
    );
};

export default Header; 