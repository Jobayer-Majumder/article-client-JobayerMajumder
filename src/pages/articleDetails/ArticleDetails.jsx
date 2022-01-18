import React from 'react';
// import MostPopular from '../../components/Home/MostPopular/MostPopular';
import Footer from '../../components/Home/Footer/Footer';
import CommentSection from '../../components/ArticleDetails/CommentSection/CommentSection';



const ArticleDetails = () => {
    const tags = ['Engineer', 'Food', 'Travelling', 'Sports'];



    return (
        <section>
            <div className="max-w-7xl px-2 sm:px-4 mx-auto py-12">
                <div className="grid md:grid-cols-8 gap-5">

                    <div className="md:col-span-5">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                            10 Things You Can Learn From the Apple Store
                        </h2>
                        <div className="flex gap-3 items-center py-2">
                            <img className='w-10 rounded-full' src="https://cdn2.iconfinder.com/data/icons/men-avatars/33/man_8-512.png" alt="" />
                            <p className="">john - jan 5, 2022</p>
                        </div>
                        <img className='rounded-md w-full' src="http://blogs.ubc.ca/blessiecanete/files/2014/11/happy-apple-store.jpg" alt="" />
                        <p className="py-4 text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nisi iure ratione repudiandae accusamus illo, aliquid corporis libero quibusdam, sequi nemo voluptas earum. Distinctio corrupti placeat, facere temporibus officiis asperiores impedit corporis repudiandae fuga perferendis dolorum culpa repellat illum aut aliquam eveniet natus eligendi modi. Quae blanditiis quidem sapiente et.
                        </p>
                        <div className="">

                            <div className='flex flex-wrap gap-3'>
                                <p className="bg-teal-500 px-3 py-1 rounded-md text-white">
                                    Tags
                                </p>
                                {
                                    tags.map((arr, index) =>
                                        <p key={index} className="cursor-pointer hover:bg-teal-500 px-3 py-1 rounded-md hover:text-white">
                                            {arr}
                                        </p>
                                    )
                                }
                            </div>
                        </div>
                        <CommentSection />
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