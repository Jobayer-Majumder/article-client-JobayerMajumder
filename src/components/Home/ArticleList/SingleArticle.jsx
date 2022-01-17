import React from 'react';

const SingleArticle = ({ article }) => {
    const { date, img, title, desc, author } = article;

    return (
        <article className='grid grid-cols-1 md:grid-cols-5 gap-4 py-4'>
            <div className="md:col-span-2 flex justify-center items-center">
                <img src={img} alt="" className="rounded-md w-full max-h-72 object-cover" />
            </div>
            <div className="md:col-span-3 bg-white px-4 py-2 rounded-md">
                <h2 className="py-2 font-bold text-xl lg:text-2xl text-gray-800">
                    {title}
                </h2>
                <p className="py-2">
                    {desc}
                </p>
                <div className="flex gap-2 items-center font-semibold text-gray-500">
                    <p className="">
                        by <span className="text-blue-600 capitalize">{author}</span>
                    </p> {'-'}
                    <p className="">
                      {date}
                    </p>
                </div>
            </div>
        </article>
    );
};

export default SingleArticle;