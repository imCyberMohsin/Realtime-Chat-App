import React, { useState } from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({ conversation, emoji, lastIndex }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;
    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);

    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <>
            <div
                className={`flex gap-2 items-center hover:bg-green-500 rounded p-3 py-1 cursor-pointer transition-all ${isSelected ? "bg-green-500" : ""}`}
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className={`relative w-12 h-12 ${isOnline ? "after:content-[''] after:absolute after:w-3 after:h-3 after:bg-green-400 after:border-2 after:border-white after:rounded-full after:right-0 after:bottom-0" : ""}`}>
                    {/* Gray background with pulse animation */}
                    {isLoading && (
                        <div className="absolute inset-0 bg-gray-300 rounded-full animate-pulse" />
                    )}
                    <img
                        src={conversation.profilePic}
                        alt='user pic'
                        className={`w-full h-full object-cover rounded-full transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                        onLoad={handleImageLoad}
                        onError={(e) => e.target.src = 'path/to/placeholder-image.png'} // Fallback image
                    />
                </div>

                <div className='flex flex-col flex-1'>
                    <div className='flex gap-2 justify-between'>
                        <p className='font-bold text-gray-200'>{conversation.fullname}</p>
                        <span className='text-xl'>{emoji}</span>
                    </div>
                </div>
            </div>

            {!lastIndex && <div className='divider my-[0.5px] py-0 h-[0.5px] bg-zinc-500' />}
        </>
    )
}

export default Conversation;