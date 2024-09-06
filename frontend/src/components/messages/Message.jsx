import React, { useState } from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../utils/extractTime'

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const [isHovering, setIsHovering] = useState(false);

    const fromMe = message.senderId == authUser._id;
    const chatClassname = fromMe ? 'chat chat-end' : 'chat chat-start';
    const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;
    const bubbleBgColor = fromMe ? 'bg-green-500' : 'bg-zinc-600';

    // Format the timestamp if it's a valid date string or timestamp
    const formattedTime = extractTime(message.createdAt);

    return (
        <>
            <div className={`${chatClassname}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src={profilePic} />
                    </div>
                </div>
                <div className={`chat-bubble text-white ${bubbleBgColor}`}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    {message.message}
                </div>
                <div className={`chat-footer text-xs flex gap-1 mt-1 items-center cursor-pointer transition-all ${isHovering ? 'opacity-75' : 'opacity-0'}`}>
                    {formattedTime}
                </div>
            </div>
        </>
    )
}

export default Message