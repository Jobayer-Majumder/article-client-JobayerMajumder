import React from 'react';


const comments = [
    {
        name: 'Saybrugh',
        img: 'https://cdn2.iconfinder.com/data/icons/men-avatars/33/man_8-512.png',
        date: 'Jan 10, 2022',
        comment: 'this is first testing comment'
    },
    {
        name: 'Saybrugh',
        img: 'https://cdn2.iconfinder.com/data/icons/men-avatars/33/man_8-512.png',
        date: 'Jan 10, 2022',
        comment: 'this is second testing comment'
    },
    {
        name: 'Saybrugh',
        img: 'https://cdn2.iconfinder.com/data/icons/men-avatars/33/man_8-512.png',
        date: 'Jan 10, 2022',
        comment: 'this is third testing comment'
    }
]


const CommentSection = () => {
    return (
        <section>
            <div className="py-8">
                <h4 className="uppercase text-center font-semibold rounded-md px-6 py-1 bg-gray-100">
                    post a comment
                </h4>
                <p className="font-semibold text-teal-500 py-4">
                    {comments.length > 1 ? `${comments.length} Comments` : '0 Comment'}
                </p>
                <textarea className='w-full input-brand' name="" id="" cols="30" rows="3" placeholder='Enter your comment...' style={{resize: 'none'}}/>

                {
                    comments.map((comment, index) =>
                        <div key={index} className="flex gap-4 py-3">
                            <div className="">
                                <img src={comment.img} className='w-10' alt="" />

                            </div>
                            <div className="">
                                <h4 className="">
                                    {comment.name}
                                </h4>
                                <p className="text-sm font-semibold text-gray-500">
                                    {comment.date}
                                </p>
                                <p className="">
                                    {comment.comment}
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default CommentSection;