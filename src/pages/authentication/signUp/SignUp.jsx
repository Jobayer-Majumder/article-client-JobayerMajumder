import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../../hooks/useForm';

const SignUp = () => {

    const { handleForm, loginData } = useForm();

    const handleLogin = async e => {
        e.preventDefault();

        // try {
        //     await findUser({
        //         variables: {
        //             email: loginData?.email,
        //             password: loginData?.password,
        //         }
        //     });
        //     const user = await getToken();
        //     setIsUserLoggedIn(user)
        //     setLoginData({ email: '', password: '' })
        //     history.replace(from);

        // } catch (error) {
        //     if (error) {
        //         alert.error('Something wrong with finding you!')
        //     }
        // }


    };



    return (
        <section className="min-h-screen flex flex-col bg-gray-100">
            <div className="flex flex-1 items-center justify-center py-12">
                <div className="rounded-lg bg-white shadow px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                    <form className="text-center" onSubmit={e => handleLogin(e)}>
                        <div className="flex flex-col justify-center items-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Oikya_Front_Logo.png/480px-Oikya_Front_Logo.png" alt="" className="h-32" />
                            <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-brand">
                                Sign up
                            </h1>

                        </div>
                        <div className="py-2 text-left">
                            <input onChange={e => handleForm(e)} value={loginData?.email} type="email" name='email' className="input-brand" placeholder="Email" required />
                        </div>
                        <div className="py-2 text-left">
                            <input onChange={e => handleForm(e)} value={loginData?.password} type="text" name='user_name' className="input-brand" placeholder="User Name" required />
                        </div>
                        <div className="py-2 text-left">
                            <input onChange={e => handleForm(e)} value={loginData?.password} type="password" name='password' className="input-brand" placeholder="Password" required />
                        </div>
                        <div className="py-2 relative">
                            <button type="submit" className="relative focus:outline-none focus:ring-2 bg-teal-500 text-white font-bold tracking-wider block w-full p-2 rounded-lg">
                                {/* {
                                    loading ? <SpinLoader /> : null
                                } */}
                                {/* <SpinLoader /> */}
                                Create account
                            </button>
                        </div>
                    </form>
                    <div className="text-center">
                        <a href="/" className="hover:underline">Forgot password?</a>
                    </div>
                    <div className="text-center mt-12">
                        <span>
                            Have an account?
                        </span> {``}
                        <Link to={'/login'} className="text-md text-blue-700 underline font-semibold hover:text-blue-800">Sign-in</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;