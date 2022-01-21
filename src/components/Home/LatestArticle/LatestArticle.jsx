//external imports
import React from 'react';

//internal imports
import MostPopular from '../MostPopular/MostPopular';
import ArticleList from '../ArticleList/ArticleList';



const LatestArticle = () => {


    return (
        <section>
            <div className="grid md:grid-cols-8">
                <div className="col-span-6">
                    <ArticleList/>
                </div>
                <div className="col-span-2 hidden md:block" >
                    <MostPopular />
                </div>
            </div>
        </section>
    );
};

export default LatestArticle;