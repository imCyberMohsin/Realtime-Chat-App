import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import useLogout from '../../hooks/useLogout'

const LogoutButton = () => {
    const { loading, logout } = useLogout();

    return (
        <div className='mt-auto pt-2'>
            {!loading ? (
                <BiLogOut className='text-3xl cursor-pointer'
                    onClick={(logout)}
                />
            ) : (
                <div className='loading loading-spinner'></div>
            )}
        </div>
    )
}

export default LogoutButton