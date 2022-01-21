import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { useAlert } from 'react-alert';
import ArticleSectionHeader from '../Common/ArticleSectionHeader';
import SingleArticle from './SingleArticle';




const GET_ARTICLES = gql`
  query {
        articles{
            _id
            title
            description
            tags
            comments
                {
                    userId
                    comment
                    createdAt
                }
            authorEmail
            updatedAt
            createdAt
        }
  }
`;

const ArticleList = () => {
    const alert = useAlert();
    const { loading, data, error } = useQuery(GET_ARTICLES);


    if(loading){
        return <p className='text-center text-teal-500'>Loading...</p>
    };

    if(error){
        alert.error(error.message)
    }

    return (
        <section>
            <ArticleSectionHeader information={{ title: 'Latest Article', link: '#' }} />
            <div className="max-w-7xl px-2 sm:px-4 mx-auto pb-8">
                <div className="grid grid-cols-1">
                    {
                        data?.articles?.map((article, index) =>
                            <SingleArticle article={article} key={index} />

                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default ArticleList;