import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <nav className="flex items-center justify-between bg-teal-500 p-6 border">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <Link to={'/'} className="font-semibold text-xl tracking-tight">Article Guru</Link>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="w-full lg:flex justify-between items-center hidden">
                    <div className="text-sm flex justify-start gap-3 items-center">
                        <a href="#responsive-header" className="text-teal-200 hover:text-white">
                            Docs
                        </a>
                        <a href="#responsive-header" className=" text-teal-200 hover:text-white">
                            Examples
                        </a>
                        <a href="#responsive-header" className="text-teal-200 hover:text-white">
                            Blog
                        </a>
                    </div>
                    <div>
                        <Link to={'/login'} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white">Login</Link>
                    </div>
                </div>
            </nav>

        </>
    );
};

export default Header;