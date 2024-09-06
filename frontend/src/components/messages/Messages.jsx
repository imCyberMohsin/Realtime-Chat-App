import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton'
import useListenMessages from '../../hooks/useListenMessages'

const Messages = () => {
    const { loading, messages } = useGetMessages();
    useListenMessages();
    const lastMessageRef = useRef();
    // console.log("messages: ", messages);

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
    }, [messages])

    return (
        <div className='px-4 flex-1 overflow-auto'>
            {!loading && messages.length > 0 && (
                messages.map((message) => {
                    return (
                        <div ref={lastMessageRef} key={message._id}>
                            <Message message={message} />
                        </div>
                    )
                })
            )}

            {loading && [...Array(10)].map((_, index) => <MessageSkeleton key={index} />)}

            {!loading && messages.length === 0 && (
                <div className='text-center text-white font-semibold h-full flex items-center justify-center'>
                    No messages yet 😕
                </div>
            )}
        </div>
    )
}

export default Messages