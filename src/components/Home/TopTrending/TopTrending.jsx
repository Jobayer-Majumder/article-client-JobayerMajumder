import React from 'react';
import ArticleSectionHeader from '../Common/ArticleSectionHeader';

const TopTrending = () => {
    return (
        <section>
            <ArticleSectionHeader information={{ title: 'Trending', link: '#' }} />
            <div className="max-w-7xl px-2 sm:px-4 mx-auto pt-5 pb-12 border-b border-gray-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="flex justify-center items-center">
                        <img className='w-full rounded-md' src="https://media.istockphoto.com/photos/professional-blogger-working-on-his-new-post-for-social-media-at-home-picture-id1252684502?b=1&k=20&m=1252684502&s=170667a&w=0&h=3kK22loPkc8S4_iJdVZ4_IpoOeIKI5zVe4LbqzhD9bM=" alt="" />
                    </div>
                    <div className="bg-white px-4 py-2 rounded-md">
                        <h4 className="font-semibold text-gray-500 pb-3">
                            Software Engineer / <span className='font-normal text-sm'>jun 28 2021</span>
                        </h4>
                        <h2 className="font-bold text-2xl lg:text-3xl text-gray-800">
                            Try to make an article to help someone who had facing problem
                        </h2>
                        <p className="py-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s , when an unknown printer took a galley of type and scrambled it to make a type specimen book …
                        </p>
                        <button className='button-brand'>
                            Read More...
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopTrending;