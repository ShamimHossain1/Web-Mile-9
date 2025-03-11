import React from 'react';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header />
                <section className='w-9/12 mx-auto'>
                    <LatestNews />
                </section>
            </header>
            <nav></nav>
            <aside></aside>
            <main></main>
            <footer></footer>

        </div>
    );
};

export default HomeLayout;