import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../zustand/useConversation'
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {
    const [search, setSearch] = useState('');
    const { setSelectedConversation } = useConversation();
    const { loading, conversations } = useGetConversations();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!search.trim()) return;

        if (search.length < 3) {
            toast.error("Search term must be at least 3 characters long");
            return;
        };

        const filteredConversations = conversations.find((conversation) => {
            return conversation?.fullname?.toLowerCase().includes(search.toLowerCase());
        })

        if(filteredConversations) {
            setSelectedConversation(filteredConversations);
            setSearch('');
        } else {
            toast.error("No conversation found");
        }
    }
    return (

        <>
            <form
                onSubmit={handleSubmit}
                className='flex items-center gap-2'>
                <input
                    type="text"
                    placeholder="Search..."
                    className="input input-bordered rounded-full input-success w-full max-w-xs"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <button type='submit' className='btn btn-circle bg-green-600 text-white'>
                    <IoSearchSharp className='w-6 h-6 outline-none' />
                </button>
            </form>
        </>
    )
}

export default SearchInput