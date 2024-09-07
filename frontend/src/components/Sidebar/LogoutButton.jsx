import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import useLogout from '../../hooks/useLogout'

const LogoutButton = () => {
    const { loading, logout } = useLogout();

    return (
        <div className='mt-auto pt-2'>
            {!loading ? (
                <button
                    className='p-2 text-center bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-300 focus:outline-none'
                    onClick={logout}>
                    <BiLogOut className='text-3xl cursor-pointer' />
                </button>
            ) : (
                <div className='loading loading-spinner'></div>
            )}
        </div>
    )
}

export default LogoutButton