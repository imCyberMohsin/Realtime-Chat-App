import React from 'react'
import useConversation from '../../zustand/useConversation'

const Conversation = ({ conversation, emoji, lastIndex, }) => {
    // console.log(conversation);

    const { selectedConversation, setSelectedConversation } = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;
    return (
        <>
            <div className={`flex gap-2 items-center hover:bg-green-500 rounded p-3 py-1 cursor-pointer transition-all ${isSelected ? "bg-green-500" : ""}`}
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className='avatar online'>
                    <div className='w-12 rounded-full'>
                        <img
                            src={conversation.profilePic}
                            alt='user pic'
                        />
                    </div>
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

export default Conversation