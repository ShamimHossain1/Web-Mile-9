import React from 'react';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import NavBar from '../Components/NavBar';

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
            <aside></aside>
            <main></main>
            <footer></footer>

        </div>
    );
};

export default HomeLayout;