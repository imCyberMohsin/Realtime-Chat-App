import React from 'react'
import Conversation from './Conversation.jsx'
import useGetConversations from '../../hooks/useGetConversations.js'
import { getRandomEmoji } from '../utils/emojis.js';

const Conversations = () => {
    const { loading, conversations } = useGetConversations();
    // console.log(conversations);

    return (
        <>
            <div className='py-2 flex flex-col overflow-auto'>
                {
                    conversations.map((conversation, index) => {
                        return (
                            <Conversation
                                key={conversation._id}
                                conversation={conversation}
                                emoji={getRandomEmoji()}
                                lastIndex={index == conversation.length - 1}
                            />
                        )
                    })
                }

                {loading ? <span className='spinner loading-spinner'></span> : null}
            </div>
        </>
    )
}

export default Conversations