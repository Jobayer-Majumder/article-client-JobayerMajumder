import { gql, useMutation } from '@apollo/client';
import React, { useContext } from 'react';
import { useAlert } from 'react-alert';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { userContext } from '../../../App';
import useForm from '../../../hooks/useForm';
import { decodeToken } from '../../../utils/decodeToken';




const CREATE_USER_MUTATION = gql`
  mutation createUser($name: String!, $email: String!, $password: String!) {
    createUser(input: {name: $name, email: $email, password: $password}){
        token
    }
  }
`;



const SignUp = () => {
    const [isUserAuthenticated, setIsUserAuthenticated] = useContext(userContext);
    const { formData, handleForm, setFormData } = useForm();
    const [createUser, { data, loading, error }] = useMutation(CREATE_USER_MUTATION);


    const alert = useAlert()
    const navigate = useNavigate();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    React.useEffect(() => {
        if (data) {
            sessionStorage.setItem('token', data.createUser.token)
            const token = sessionStorage.getItem('token');
            decodeToken(token).then(success => {
                setIsUserAuthenticated(success)
            }).catch(err => alert.error(err))
        }
    }, [data, setIsUserAuthenticated, alert, error])

    const handleSignUp = async e => {
        e.preventDefault();

        try {
            await createUser({
                variables: {
                    name: formData?.name,
                    email: formData.email,
                    password: formData.password
                }
            });
            setFormData({ name: '', email: '', password: '' });
            navigate(from);
        } catch (error) {
            alert.error(error.message)
        }
    };

    console.log(isUserAuthenticated)

    return (
        <section className="min-h-screen flex flex-col bg-gray-100">
            <div className="flex flex-1 items-center justify-center py-12">
                <div className="rounded-lg bg-white shadow px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                    <form className="text-center" onSubmit={e => handleSignUp(e)}>
                        <div className="flex flex-col justify-center items-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Oikya_Front_Logo.png/480px-Oikya_Front_Logo.png" alt="" className="h-32" />
                            <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-brand">
                                Sign up
                            </h1>

                        </div>
                        <div className="py-2 text-left">
                            <input onChange={e => handleForm(e)} value={formData?.name} type="text" name='name' className="input-brand" placeholder="Your Name" required />
                        </div>
                        <div className="py-2 text-left">
                            <input onChange={e => handleForm(e)} value={formData?.email} type="email" name='email' className="input-brand" placeholder="Email" required />
                        </div>
                        <div className="py-2 text-left">
                            <input onChange={e => handleForm(e)} value={formData?.password} type="password" name='password' className="input-brand" placeholder="Password" required />
                        </div>
                        <div className="py-2 relative">
                            {
                                loading ? <p className="absolute top-3.5 z-50 left-8 text-white font-semibold">creating...</p> : null
                            }
                            <button type="submit" className="relative focus:outline-none focus:ring-2 bg-teal-500 text-white font-bold tracking-wider block w-full p-2 rounded-lg">
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