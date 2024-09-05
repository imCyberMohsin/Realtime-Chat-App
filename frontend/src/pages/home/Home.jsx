import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'
import { useAuthContext } from '../../context/AuthContext'

const Home = () => {
    const { authUser } = useAuthContext();
    // console.log(authUser.fullname);
    return (
        <>
            <div>
                <h1 className='text-center py-3 font-semibold text-2xl'>Welcome Back {authUser.fullname}!</h1>
                <div className='flex sm:h-[450px] md:h-[550px] border border-zinc-500 rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                    <Sidebar />
                    <MessageContainer />
                </div>
            </div>
        </>
    )
}

export default Home