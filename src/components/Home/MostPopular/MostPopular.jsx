import React from 'react';
import articleListData from '../ArticleList/articleListData';

const MostPopular = () => {
    const [stickyClass, setStickyClass] = React.useState(false);

    React.useEffect(() => {
      window.addEventListener('scroll', stickNavbar);
  
      return () => {
        window.removeEventListener('scroll', stickNavbar);
      };
    }, []);
  
    const stickNavbar = () => {
      if (window !== undefined) {
        let windowHeight = window.scrollY;
        windowHeight > 600 ? setStickyClass(true) : setStickyClass(false);
      }
    };


    
    return (
        <aside className='relative ' style={{position: 'relative'}}>
            <div className={`pt-4 ${stickyClass ? 'fixed' : 'relative'} top-0`} >
                <div className="text-center">
                    <h2 className="bg-white px-8 py-1.5 uppercase font-semibold text-gray-800 rounded-md">most popular</h2>
                </div>
                <div className="py-4">
                    {
                        articleListData.slice(2, 6).map((article, index) =>
                            <div key={index} className="grid grid-cols-3 gap-2 pb-2 group hover:opacity-75 cursor-pointer" >
                                <div className="overflow-hidden col-span-1 flex justify-center items-center">
                                    <img src={article.img} alt="" className='rounded-md transform transition duration-500 hover:scale-110' />
                                </div>

                                <div className='col-span-2 bg-white rounded p-2'>
                                    <p className='text-sm text-gray-500'>{article.date}</p>
                                    <h1 className='text-sm font-semibold text-gray-800'>{article.title}</h1>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </aside>
    );
};

export default MostPopular;