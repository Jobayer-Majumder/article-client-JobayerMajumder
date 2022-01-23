import React from 'react';
import { Link } from 'react-router-dom';

const SingleArticle = ({ article }) => {
    const { title, description, authorName, createdAt, tags, _id } = article;


    console.log(article)
    return (
        <div className="max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center">
                <span className="font-light text-gray-600">
                    {new Date(createdAt).toDateString()}
                </span>
                <div className="flex flex-wrap gap-2">
                    {
                        tags.map((tag, index) =>
                            <p key={index} className="text-xs cursor-pointer bg-gray-100 px-2 py-1 rounded-md hover:text-blue-500 text-gray-500">
                                {tag}
                            </p>
                        )
                    }
                </div>
            </div>
            <div className="mt-2">
                <Link to={`/articleDetails/${_id}`}>
                    <h1 className="text-2xl text-gray-700 font-bold hover:text-gray-600">
                        {title}
                    </h1>
                </Link>
                <p className="mt-2 text-gray-600">
                    {description}
                </p>
            </div>
            <div className="flex justify-between items-center mt-4">
                <Link to={`/articleDetails/${_id}`} className="text-blue-600 hover:underline" href="/">
                    Read more
                </Link>
                <div className='flex items-center'>
                    <img className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" src="https://cdn2.iconfinder.com/data/icons/men-avatars/33/man_8-512.png" alt="avatar" />
                    <h1 className="text-gray-700 font-bold">{authorName}</h1>
                </div>
            </div>
        </div>
    );
};

export default SingleArticle;