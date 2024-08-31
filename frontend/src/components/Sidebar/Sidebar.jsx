import React from 'react'
import SearchInput from './SearchInput'
import Conversations from '../Sidebar/Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
    return (
        <>
            <div className='h-full border-r border-slate-500 p-4 flex flex-col'>
                <SearchInput/>
                <div className='divider px-3 h-[0.5px] bg-zinc-600'></div>
                <Conversations/>

                <LogoutButton/>
            </div>
        </>
    )
}

export default Sidebar