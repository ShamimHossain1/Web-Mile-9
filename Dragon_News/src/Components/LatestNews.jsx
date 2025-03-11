import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='bg-[#F3F3F3] p-4 flex gap-5 items-center'>
           <Link to='/news'> <p className='bg-[#D72050] text-3xl text-white py-2 px-6'>Latest</p></Link>
            <Marquee pauseOnHover={true} className='font-semibold text-[#403F3F] text-2xl  '>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default LatestNews;