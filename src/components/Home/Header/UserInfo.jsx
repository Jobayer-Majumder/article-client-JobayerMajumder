import React from 'react';
import { Link } from 'react-router-dom';



const UserInfo = ({ user }) => {
    const [isOpenMenu, setIsOpenMenu] = React.useState(false);

    const handleLogout = async () => {

        try {
            await sessionStorage.removeItem('token')
            window.location.reload(false)
        } catch (error) {
            console.log(error)
        }
        
    };

    return (
        <>
            <div className="relative">
                <div onClick={() => setIsOpenMenu(!isOpenMenu)} className="flex flex-col justify-center items-center">
                    <img src='https://cdn2.iconfinder.com/data/icons/men-avatars/33/man_8-512.png' className='cursor-pointer w-10' alt="" />
                    <button className="text-sm leading-none text-white" >
                        {user.name}
                    </button>
                </div>
                {
                    isOpenMenu && <div className="flex flex-col justify-center items-center gap-4 px-4 py-2 absolute top-16 right-0 bg-teal-500">

                        <Link onClick={() => setIsOpenMenu(!isOpenMenu)} to={'/myblogs'} className='text-white uppercase text-sm hover:underline'>
                            My blogs
                        </Link>
                        <button className='button-brand' onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                }
            </div>
        </>
    )
};

export default UserInfo;