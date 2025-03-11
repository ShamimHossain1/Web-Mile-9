import React from 'react';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import NavBar from '../Components/NavBar';
import LeftNavbar from '../Components/Layout-Components/LeftNavbar';
import MainContent from '../Components/Layout-Components/MainContent';
import RightNavbar from '../Components/Layout-Components/RightNavbar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header />
                <section className='w-10/12 mx-auto'>
                    <LatestNews />
                </section>
            </header>

            <nav className='w-10/12 mx-auto'>
                <NavBar></NavBar>
            </nav>

            <main className='w-10/12 mx-auto grid md:grid-cols-12 gap-6 mt-16'>
                <aside className=' col-span-3'>
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className='col-span-6'>
                    <MainContent></MainContent>
                </section>
                <aside className=' col-span-3'>
                   <RightNavbar></RightNavbar>
                </aside>
            </main>


            <footer></footer>

        </div>
    );
};

export default HomeLayout;