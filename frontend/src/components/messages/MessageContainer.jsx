import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";
import useConversation from '../../zustand/useConversation'
import { useAuthContext } from '../../context/AuthContext';

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    useEffect(() => {
        // Cleanup function
        return () => {
            setSelectedConversation(null);
        }
    }, [setSelectedConversation]);

    return (
        <div className='md:min-w-[450px] flex flex-col'>
            {!selectedConversation ? <NoChatSelected /> : (
                <>
                    {/* Header */}
                    <div className='bg-zinc-600 px-4 py-2 mb-2 flex items-center gap-3'>
                        {/* <span className='label-text'>To:</span>{" "} */}
                        {/* <img src={selectedConversation.profilePic} alt="pic" /> */}
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt={selectedConversation.fullname}
                                    src={selectedConversation.profilePic} />
                            </div>
                        </div>

                        <span className='text-zinc-200 font-bold'>{selectedConversation.fullname}</span>
                    </div>

                    {/* Messages */}
                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    )
}

export default MessageContainer;


const NoChatSelected = () => {
    const { authUser } = useAuthContext();
    // console.log(authUser);
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-20 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Hey! {authUser.fullname} 😀😃</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    );
};