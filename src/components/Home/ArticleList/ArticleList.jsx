import React from 'react';
import ArticleSectionHeader from '../Common/ArticleSectionHeader';
import articleListData from './articleListData';
import SingleArticle from './SingleArticle';

const ArticleList = () => {
    return (
        <section>
            <ArticleSectionHeader information={{ title: 'Latest Article', link: '#' }} />
            <div className="max-w-7xl px-2 sm:px-4 mx-auto pb-8">
                <div className="grid grid-cols-1">
                    {
                        articleListData.map((article, index) =>
                            <SingleArticle article={article} key={index} />

                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default ArticleList;