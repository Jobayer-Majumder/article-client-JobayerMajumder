import React from 'react';
import { Link } from 'react-router-dom';

const SingleArticle = ({ article }) => {
    const { title, description, authorEmail, createdAt, tags, _id } = article;

    return (
        <article className='grid grid-cols-1 md:grid-cols-5 gap-4 py-4'>
            <div className="md:col-span-2 flex justify-center items-center">
                <img src='https://lh3.googleusercontent.com/U5ryues6WQMpPflAS5YLVwAFb98OeMEJWrlrRBgfXa_u2Lg7dcx_9WgQWWMkGQjR1J4qkl7ryhzlTeBtOtE6qzbcU7fLYF-dZse9wRpl=h200' alt="" className="rounded-md w-full max-h-72 object-cover" />
            </div>
            <div className="md:col-span-3 bg-white px-4 py-2 rounded-md">
                <div className='flex flex-wrap gap-2'>
                    {
                        tags.map((tag, index) =>
                            <p key={index} className="text-xs cursor-pointer bg-gray-100 px-2 py-1 rounded-md hover:text-blue-500 text-gray-500">
                                {tag}
                            </p>
                        )
                    }
                </div>
                <Link to={`/articleDetails/${_id}`}>
                    <h2 className="py-2 hover:text-blue-500 font-bold text-xl lg:text-2xl text-gray-800">
                        {title}
                    </h2>
                    <p className="py-2">
                        {description}
                    </p>
                </Link>
                <div className="flex gap-2 text-sm items-center font-semibold text-gray-500">
                    <p className="">
                        by <span className="text-blue-600 capitalize">{authorEmail}</span>
                    </p> {'-'}
                    <p className="">
                        {new Date(createdAt).toDateString()}
                    </p>
                </div>
            </div>
        </article>
    );
};

export default SingleArticle;