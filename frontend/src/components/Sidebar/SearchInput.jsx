import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
    return (
        <>
            <form className='flex items-center gap-2'>
                <input
                    type="text"
                    placeholder="Search..."
                    className="input input-bordered rounded-full input-success w-full max-w-xs"
                />

                <button type='submit' className='btn btn-circle bg-green-600 text-white'>
                    <IoSearchSharp className='w-6 h-6 outline-none' />
                </button>
            </form>
        </>
    )
}

export default SearchInput