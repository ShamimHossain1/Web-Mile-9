import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {
    const [Category, setCategory] = useState([]);
    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then((res) => res.json())
            .then((data) => setCategory(data.data.news_category));
    }, []);

    // console.log(Category);
    return (
        <div>
            <div className=" text-[#403f3f] text-2xl font-semibold mb-6  ">All Category</div>

            <div>
                {
                    Category.map(category => <NavLink to={`/category/${category.category_id}`} className='block text-[#9f9f9f] text-3xl py-4 pl-12 hover:bg-gray-100' key={category.category_id}>{category.category_name}</NavLink>)
                }
            </div>

        </div>
    );
};

export default LeftNavbar;