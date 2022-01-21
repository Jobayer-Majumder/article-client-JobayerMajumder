//external imports
import React from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
// import MostPopular from '../../components/Home/MostPopular/MostPopular';
//internal imports
import Footer from '../../components/Home/Footer/Footer';
import CommentSection from '../../components/ArticleDetails/CommentSection/CommentSection';
import { convertStringToDate } from '../../utils/convertStringToDate';



const GET_ARTICLE_BY_ID = gql`
  query findArticle($bred: String!){
        findArticle(id: $bred){
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


const ArticleDetails = () => {
    const { id } = useParams();

    const { loading, data, error } = useQuery(GET_ARTICLE_BY_ID, {
        variables: { bred: id }
    });


    if (loading) {
        return <p className='text-center text-teal-500'>Loading...</p>
    }
    if (error) {
        alert(error.message);
    }

    const { date } = convertStringToDate(data?.findArticle[0]?.createdAt)

    return (
        <section>
            <div className="max-w-7xl px-2 sm:px-4 mx-auto py-12">
                <div className="grid md:grid-cols-8 gap-5">

                    <div className="md:col-span-5">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                            {
                                data?.findArticle[0]?.title
                            }
                        </h2>
                        <div className="flex gap-3 items-center py-2">
                            <img className='w-10 rounded-full' src="https://cdn2.iconfinder.com/data/icons/men-avatars/33/man_8-512.png" alt="" />
                            <p className="">john -
                                {
                                    date
                                }
                            </p>
                        </div>
                        <img className='rounded-md w-full' src="http://blogs.ubc.ca/blessiecanete/files/2014/11/happy-apple-store.jpg" alt="" />
                        <p className="py-4 text-justify">
                            {
                                data?.findArticle[0]?.description
                            }
                        </p>
                        <div className="">

                            <div className='flex flex-wrap gap-3'>
                                <p className="bg-teal-500 px-3 py-1 rounded-md text-white">
                                    Tags
                                </p>
                                {
                                    data?.findArticle[0]?.tags.map((arr, index) =>
                                        <p key={index} className="cursor-pointer hover:bg-teal-500 px-3 py-1 rounded-md hover:text-white">
                                            {arr}
                                        </p>
                                    )
                                }
                            </div>
                        </div>
                        <CommentSection comments={data?.findArticle[0]?.comments} />
                    </div>

                    <div className="md:col-span-3 hidden md:block">
                        {/* <MostPopular /> */}
                    </div>

                </div>
            </div>
            <Footer />
        </section>
    );
};

export default ArticleDetails;