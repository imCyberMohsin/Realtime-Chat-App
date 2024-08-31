import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
    const noChatSelected = false;

    return (
        <div className='md:min-w[450px] flex flex-col'>
            {noChatSelected ? <NoChatSelected /> : (
                <>
                    {/* Header */}
                    <div className='bg-zinc-600 px-4 mb-2'>
                        <span className='label-text'>To:</span>{" "}
                        <span className='text-gray-900 font-bold'>Bidi</span>
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
    // const { authUser } = useAuthContext();
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-20 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome 👋 Mohsin ❄</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    );
};