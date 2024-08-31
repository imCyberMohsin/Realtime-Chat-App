import React from 'react'
import { LuSendHorizonal } from "react-icons/lu";

const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
      <div className='w-full relative'>
        <input placeholder='Enter Message' type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-zinc-700 border-zinc-600 text-white' />
        <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
          <LuSendHorizonal className='text-xl'/>
        </button>
      </div>
    </form>
  )
}

export default MessageInput