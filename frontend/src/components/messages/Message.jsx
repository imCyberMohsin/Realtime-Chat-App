import React from 'react'

const Message = () => {
    return (
        <>
            <div className='flex'>
                <div className="chat chat-start w-1/2">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS chat bubble component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <div className="chat-bubble text-white bg-zinc-600">I'm Happy to have you</div>
                    <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
                </div>
                <div className="chat chat-end w-1/2">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS chat bubble component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <div className="chat-bubble text-white bg-green-500">Same here</div>
                    <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
                </div>
            </div>
        </>
    )
}

export default Message