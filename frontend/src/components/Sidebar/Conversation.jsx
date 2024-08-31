import React from 'react'

const Conversation = () => {
    return (
        <>
            <div className='flex gap-2 items-center hover:bg-green-500 rounded p-3 py-1 cursor-pointer transition-all'>
                <div className='avatar online'>
                    <div className='w-12 rounded-full'>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        />
                    </div>
                </div>

                <div className='flex flex-col flex-1'>
                    <div className='flex gap-2 justify-between'>
                        <p className='font-bold text-gray-200'>Bidi</p>
                        <span className='text-xl'>🌻</span>
                    </div>
                </div>
            </div>

            <div className='divider my-[0.5px] py-0 h-[0.5px] bg-zinc-500' />
        </>
    )
}

export default Conversation