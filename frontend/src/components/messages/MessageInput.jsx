import React, { useState } from 'react'
import { LuSendHorizonal } from "react-icons/lu";
import useSendMessage from '../../hooks/useSendMessage'

const MessageInput = () => {
  const { loading, sendMessage } = useSendMessage();

  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message.trim()) return; // Prevent sending empty or whitespace-only messages

    await sendMessage(message);
    setMessage("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='px-4 my-3'>
      <div className='w-full relative'>
        <input
          placeholder='Enter Message'
          type="text"
          className='border text-sm rounded-lg block w-full p-2.5 bg-zinc-700 border-zinc-600 text-white'
          onChange={e => setMessage(e.target.value)}
          value={message}
        />
        <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
          {loading ? <span className='loading loading-spinner'></span> : <LuSendHorizonal className='text-xl' />}
        </button>
      </div>
    </form>
  )
}

export default MessageInput