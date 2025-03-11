import React from 'react';
import facebook from '../assets/fb.png';
import twitter from '../assets/instagram.png';
import instagram from '../assets/twitter.png';

const SocialContact = () => {
    return (
        <div className=''>
            <h2 className="text-xl font-semibold my-6">Find Us On</h2>
            <div className=" text-[#706f6f]  rounded-[5px] border border-[#e7e7e7] flex flex-col ">

                <button className="flex items-center space-x-2 border border-[#e7e7e7]  p-3   hover:bg-gray-100">
                    <img src={facebook} alt="Facebook Logo" className="w-6 bg-[#f3f3f3] rounded-[20px] p-1 h-6" />
                    <span className="text-lg font-medium">Facebook</span>
                </button>

                <button className="flex items-center space-x-2 border border-[#e7e7e7]  p-3   hover:bg-gray-100">
                    <img src={twitter} alt="Twitter Logo" className="w-6 h-6 bg-[#f3f3f3] rounded-[20px] p-1" />
                    <span className="text-lg font-medium">Twitter</span>
                </button>

                <button className="flex items-center space-x-2 border border-[#e7e7e7]  p-3   hover:bg-gray-100">
                    <img src={instagram} alt="Instagram Logo" className="w-6 h-6 bg-[#f3f3f3] rounded-[20px] p-1" />
                    <span className="text-lg font-medium">Instagram</span>
                </button>
            </div>
        </div>
    );
};

export default SocialContact;