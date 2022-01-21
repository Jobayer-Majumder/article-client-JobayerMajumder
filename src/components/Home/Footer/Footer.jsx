import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-center">
            <div className="px-6 pt-6">
                <form action="">
                    <div className="grid md:grid-cols-3 gird-cols-1 gap-4 flex justify-center items-center">
                        <div className="md:ml-auto md:mb-6">
                            <p className="text-gray-800">
                                <strong>Sign up for our newsletter</strong>
                            </p>
                        </div>

                        <div className="md:mb-6">
                            <input
                                type="text"
                                className="input-brand"
                                id="exampleFormControlInput1"
                                placeholder="Email address" />
                        </div>

                        <div className="md:mr-auto mb-6">
                            <button type="button" className="button-brand">Subscribe</button>
                        </div>
                    </div>
                </form>
            </div>

            <div className="text-center text-gray-700 p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                © {new Date().getFullYear()} Copyright: {' '}
                <a className="text-gray-800 font-semibold hover:underline hover:text-blue-700" href="/">Article Guru</a>
            </div>
        </footer>
    );
};

export default Footer;