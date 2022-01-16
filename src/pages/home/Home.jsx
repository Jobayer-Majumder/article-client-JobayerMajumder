import React from 'react';
import Header from '../../components/Home/Header/Header';
import TopTrending from '../../components/Home/TopTrending/TopTrending';

const Home = () => {
    return (
        <>
            <Header />
            <div className="bg-gray-100">
                <TopTrending />
            </div>
        </>
    );
};

export default Home;