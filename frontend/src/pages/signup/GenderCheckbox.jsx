import React from 'react'

const GenderCheckbox = () => {
    return (
        <>
            <div className='flex py-1'>
                {/* Male */}
                <div className='form-control'>
                    <label className={'label gap-2 cursor-pointer'}>
                        <span className='label-text'>Male</span>
                        <input type="checkbox" className='checkbox checkbox-success border-slate-900' />
                    </label>
                </div>
                {/* Female */}
                <div className='form-control'>
                    <label className={'label gap-2 cursor-pointer'}>
                        <span className='label-text'>Female</span>
                        <input type="checkbox" className='checkbox checkbox-success border-slate-900' />
                    </label>
                </div>
            </div>
        </>
    )
}

export default GenderCheckbox