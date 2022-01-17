import React from 'react';
// import Header from '../../components/Home/Header/Header';
import LatestArticle from '../../components/Home/LatestArticle/LatestArticle';
import TopTrending from '../../components/Home/TopTrending/TopTrending';

const Home = () => {
    return (
        <>
            {/* <Header /> */}
            <div className="bg-gray-100">
                <TopTrending />
                <LatestArticle />
            </div>
        </>
    );
};

export default Home;