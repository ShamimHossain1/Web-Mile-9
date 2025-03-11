import React from 'react';

import logo from '../assets/logo.png';

const Header = () => {
    return (
        <div>
            <div className='flex flex-col gap-5 items-center justify-center mt-12 mb-5'>
                <img className='' src={logo} alt="logo" />
                <h2 className='text-[#706F6F] text-lg'>Journalism Without Fear or Favour</h2>
            </div>
        </div>
    );
};

export default Header;