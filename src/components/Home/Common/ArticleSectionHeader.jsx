import React from 'react';

const ArticleSectionHeader = ({information}) => {
    const {title, link} = information;

    return (
        <header className='max-w-7xl px-2 sm:px-4 mx-auto pt-4'>
            <div className="flex justify-between items-center flex-wrap">
                <h2 className="font-semibold text-gray-800 px-3 py-1.5 bg-white rounded-md">{title}</h2>
                <p className="text-sm text-gray-500">View all{link}</p>
            </div>
        </header>
    );
};

export default ArticleSectionHeader;