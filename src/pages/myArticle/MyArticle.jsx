import { gql, useLazyQuery, useQuery } from '@apollo/client';
import React, { useContext } from 'react';
import { useAlert } from 'react-alert';
import { userContext } from '../../App';




const GET_ARTICLE_BY_EMAIL = gql`
  query userArticle($bred: String!){
        userArticle(email: $bred){
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

const DELETE_ARTICLE = gql`
  query deleteArticle($bred: String!){
    deleteArticle(id: $bred){
            successMessage
        }
  }
`;

const MyArticle = () => {
    const alert = useAlert();
    const [isUserAuthenticated] = useContext(userContext);

    const { loading, data } = useQuery(GET_ARTICLE_BY_EMAIL, {
        variables: { bred: isUserAuthenticated.email }
    });

    const [deleteArticle, { data: aData, loading: aLoading }] = useLazyQuery(DELETE_ARTICLE);

    React.useEffect(() => {
        if(aData){
            alert.success(aData.successMessage);
            window.location.reload(false)
        }
    }, [aData, alert]);


    if(loading){
        return <p className='py-5 text-center text-teal-500 font-semibold'>Loading...</p>
    }

    return (
        <section className="max-w-7xl px-2 sm:px-4 mx-auto">
            <div className="grid grid-cols-1 mt-5">
                <div className="rounded-lg shadow">
                    {
                        data?.userArticle <= 0 && <p className='text-center py-4 uppercase text-red-500'>You have no article!</p>
                    }
                    {
                       aLoading ? <p className='text-center font-semibold text-red-500'>Deleting</p> : null
                    }
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            {
                                data?.userArticle.length > 0 && <thead>
                                    <tr className="text-xs lg:text-base font-semibold text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-200">
                                        <th className="px-2 py-3 capitalize">Sr.</th>
                                        <th className="px-2 py-3">Title</th>
                                        <th className="px-2 py-3">Comments</th>
                                        <th className="px-2 py-3">Action</th>
                                        <th className="px-2 py-3">Created</th>
                                    </tr>
                                </thead>

                            }
                            <tbody className="bg-white">
                                {
                                    data?.userArticle.map((article, index) =>
                                        <tr className="text-gray-700" key={index}>
                                            <td className="px-2 py-3">
                                                {index + 1}
                                            </td>
                                            <td className="px-2 py-3 text-md font-semibold">{article.title}</td>
                                            <td className="px-2 py-3 text-md font-semibold">{article.comments?.length}</td>
                                            <td className="px-2 py-3 text-sm">
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => deleteArticle({
                                                            variables: { bred: article._id }
                                                        })}
                                                        className="text-xs py-1 px-2 rounded-md bg-red-100 hover:bg-red-500 text-red-700 hover:text-white">
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="px-2 py-3 text-sm">{new Date().toDateString()}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyArticle;